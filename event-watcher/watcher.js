var Web3 = require('web3');
var util = require('util');
var web3;
var i = 5;

var watcher = {

    instance: null,
    lastBlock: 'latest',
    firstBlock: 3280344,

    init: function() {
        var config = require('./config.json');
        var host = config.EthNode.IP + ':' + config.EthNode.Port;
        var authUser = config.EthNode.RpcUser;
        var authPass = config.EthNode.RpcPassword;

        var providerUrl = util.format('ws://%s', host);

        var provider = new Web3.providers.WebsocketProvider(providerUrl, {
            headers: {
                authorization: 'Basic ' + Buffer.from(authUser + ':' + authPass).toString('base64')
            }
        });
        provider.on('notifcation', () => { console.log('ws notified'); });
        provider.on('connect', () => { console.log('ws connected'); });
        provider.on('error', (e) => { console.log('ws error ', e); });
        provider.on('end', (e) => { console.log('ws disconnected ', e); });
        provider.on('data', () => { console.log('ws received data'); });

        web3 = new Web3(provider);

        this.instance = new web3.eth.Contract(config.SmartContract.ABI, config.SmartContract.Address);

        setInterval(function() {
            web3.eth.net.isListening(function(e, r) {});
        }, 5000);

        this.registerEvents();
    },

    registerEvents: function() {
        this.instance.events.allEvents({ fromBlock: this.firstBlock }, this._onEvent.bind(this));
    },

    // EVENTS
    _onEvent: function(e, r) {
        console.log('--- EVENT SEEN ---');
        console.log('Error: ', e);
        console.log('Block number: ', r.blockNumber);
        console.log('Event name: ', r.event);
        console.log('Event value: ', r.returnValues[1]);

        if (r) {
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

    },

    _onDeactivateOrganisation: function(r) {

    },

    _onReactivateOrganisation: function(r) {

    },

    _onChangeURL: function(r) {

    },

    _onChangeDescription: function(r) {

    }
};

module.exports = watcher;