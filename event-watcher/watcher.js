var Web3 = require('web3');
var util = require('util');
var request = require('request');
var fs = require('fs');
var web3;

var watcher = {

    instance: null,
    lastBlock: 'latest',
    firstBlock: 3280344,

    config: null,
    env: null,

    init: function() {
        this.config = require('./config.json');

        if (fs.existsSync('./lastSeenBlock')) {
            this.firstBlock = parseInt(fs.readFileSync('./lastSeenBlock')) + 1;
        }

        var env = process.env.ENVIRONMENT === 'production' ? 'prod' : 'dev';
        this.env = env;

        var host = this.config.EthNode[env].IP + ':' + this.config.EthNode[env].Port;
        var authUser = this.config.EthNode[env].RpcUser;
        var authPass = this.config.EthNode[env].RpcPassword;

        var providerUrl = util.format('ws://%s', host);

        var provider = new Web3.providers.WebsocketProvider(providerUrl, authUser && authPass ? {
            headers: {
                authorization: 'Basic ' + Buffer.from(authUser + ':' + authPass).toString('base64')
            }
        } : {});

        provider.on('notifcation', () => { /* console.log('ws notified'); */ });
        provider.on('connect', () => { /* console.log('ws connected'); */ });
        provider.on('error', (e) => { /* console.log('ws error ', e); */ });
        provider.on('end', (e) => { /* console.log('ws disconnected ', e); */ });
        provider.on('data', () => { /* console.log('ws received data'); */ });

        web3 = new Web3(provider);

        this.instance = new web3.eth.Contract(this.config.SmartContract.ABI, this.config.SmartContract.Address[env]);

        setInterval(function() {
            web3.eth.net.isListening(function(e, r) {});
        }, 5000);

        this.registerEvents();
    },

    registerEvents: function() {
        this.instance.events.allEvents({ fromBlock: this.firstBlock }, this._onEvent.bind(this));
    },

    sendToFrontend: function(event, data) {
        var url = this.config.DLTFrontEnd[this.env].Url + '/' + event;

        request.post({
            url: url,
            json: data
        });
    },

    // EVENTS
    _onEvent: function(e, r) {
        if (r) {
            this.firstBlock = r.blockNumber;
            fs.writeFileSync('./lastSeenBlock', this.firstBlock.toString(), { 'encoding': 'utf8' });

            switch (r.event) {
                case 'CreateOrganisation':
                    this._onCreateOrganisation(r);
                    break;
                case 'DeactivateOrganisation':
                    this._onDeactivateOrganisation(r);
                    break;
                case 'ReactivateOrganisation':
                    this._onReactivateOrganisation(r);
                    break;
                case 'ChangeURL':
                    this._onChangeURL(r);
                    break;
                case 'ChangeDescription':
                    this._onChangeDescription(r);
                    break;
            }
        }
    },

    _onCreateOrganisation: function(r) {
        var data = {
            'AccountAddress': r.returnValues[0],
            'OrganizationName': r.returnValues[1],
            'OrganizationWebsite': r.returnValues[2],
            'OrganizationDescription': r.returnValues[3]
        };

        this.sendToFrontend(r.event, data);
    },

    _onDeactivateOrganisation: function(r) {
        var data = {
            'AccountAddress': r.returnValues[0]
        };

        this.sendToFrontend(r.event, data);
    },

    _onReactivateOrganisation: function(r) {
        var data = {
            'AccountAddress': r.returnValues[0]
        };

        this.sendToFrontend(r.event, data);
    },

    _onChangeURL: function(r) {
        var data = {
            'AccountAddress': r.returnValues[0],
            'OrganizationWebsite': r.returnValues[1]
        };

        this.sendToFrontend(r.event, data);
    },

    _onChangeDescription: function(r) {
        var data = {
            'AccountAddress': r.returnValues[0],
            'OrganizationDescription': r.returnValues[1]
        };

        this.sendToFrontend(r.event, data);
    }
};

module.exports = watcher;