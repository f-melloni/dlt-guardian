var _ = $.proxy;

var SMART_CONTRACT_ABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "members",
        "outputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "website",
                "type": "string"
            },
            {
                "name": "description",
                "type": "string"
            },
            {
                "name": "registered",
                "type": "bool"
            },
            {
                "name": "active",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_memberAddress",
                "type": "address"
            }
        ],
        "name": "admin_reactivateMemberAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "member_cancelMembership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_memberAddress",
                "type": "address"
            }
        ],
        "name": "admin_deactivateMemberAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_orgName",
                "type": "string"
            },
            {
                "name": "_orgWebsite",
                "type": "string"
            },
            {
                "name": "_orgDescription",
                "type": "string"
            }
        ],
        "name": "public_requestMembership",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_walletAccount",
                "type": "address"
            }
        ],
        "name": "admin_setWalletAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_membershipFee",
                "type": "uint256"
            }
        ],
        "name": "admin_setMembershipFee",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newWebsite",
                "type": "string"
            }
        ],
        "name": "member_changeOrgWebsite",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "membershipFee",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "memberAddresses",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newDescription",
                "type": "string"
            }
        ],
        "name": "member_changeOrgDescription",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "admin_sweepEth",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "walletAccount",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "",
                "type": "string"
            }
        ],
        "name": "CreateOrganisation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "address"
            }
        ],
        "name": "DeactivateOrganisation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "address"
            }
        ],
        "name": "ReactivateOrganisation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "",
                "type": "string"
            }
        ],
        "name": "ChangeURL",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "",
                "type": "string"
            }
        ],
        "name": "ChangeDescription",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
];

var SC = {

    SC_ADDRESS_DEV: '0x52f4d5a7ac13cca456ea2048d4ca56002a3337b1',
    SC_ADDRESS_PROD: '',

    REQUEST_MEMBERSHIP_BASE_GAS: 100700,
    REQUEST_MEMBERSHIP_GAS_PER_CHAR: 900,

    MAX_GAS: 4653035,

    defaultAddress: null,
    isOwner: false,
    contract: null,
    instance: null,
    entryFee: null,

    inputs: {
        membershipRequest: {
            orgName: $('#orgName'),
            orgWebsite: $('#orgWebsite'),
            orgDescription: $('#orgDescription')
        },
        changeWebsite: {
            newWebsite: $('#newWebsite')
        },
        changeDescription: {
            newDescription: $('#newDescription')
        },
        fee: {
            newFee: $('#newEntryFee')
        },
        owner: {
            newOwner: $('#newOwnerWallet')
        }
    },

    panels: {
        notMember: $('#notMemberPanel'),
        member: $('#memberPanel'),
        owner: $('#ownerPanel'),
        canceled: $('#canceledMembershipPanel'),
        list: $('#memberListPanel'),
        noConnection: $('#noConnection')
    },

    modalChangeWebsite: $('#modalChangeWebsite'),
    modalChangeDescription: $('#modalChangeDescription'),
    modalConfirm: $('#modalConfirm'),

    memberListTable: $('#memberListTable'),

    ownerActions: {
        deactivate: {
            title: 'Deactivate membership',
            className: 'fa-times-circle text-danger',
            forActive: true
        },
        reactivate: {
            title: 'Reactivate membership',
            className: 'fa-check text-success',
            forActive: false
        }
    },

    currentActionTarget: null,

    init: function () {
        web3 = new Web3(typeof web3 !== 'undefined' ? web3.currentProvider : new Web3.providers.HttpProvider('http://localhost:8545'));

        this.contract = web3.eth.contract(SMART_CONTRACT_ABI);
        this.instance = this.contract.at($('body').is('.dev') ? this.SC_ADDRESS_DEV : this.SC_ADDRESS_PROD);

        $(document)
            .on('keyup',    '#regForm input, #regForm textarea',    _(this._onRegFormKeyUp, this))
            .on('keyup',    '#newDescription',                      _(this._onNewDescriptionChange, this))
            .on('keyup',    '#newEntryFee',                         _(this._onNewEntryFeeKeyUp, this))
            .on('change',   '#newWebsite',                          _(this._onNewWebsiteChange, this))
            .on('click',    '#btnEditWebsite',                      _(this._onEditWebsiteClick, this))
            .on('click',    '#btnEditDescription',                  _(this._onEditDescriptionClick, this))
            .on('click',    '#btnSaveWebsite',                      _(this._onChangeWebsiteFormSubmit, this))
            .on('click',    '#btnSaveDescription',                  _(this._onChangeDescriptionFormSubmit, this))
            .on('click',    '#btnCancelMembership',                 _(this._onBtnCancelMembershipClick, this))
            .on('click',    '#btnNo',                               _(this._onBtnNoClick, this))
            .on('click',    'a.actionIcon',                         _(this._onActionIconClick, this))
            .on('submit',   '#regForm',                             _(this._onRegFormSubmit, this))
            .on('submit',   '#formChangeWebsite',                   _(this._onChangeWebsiteFormSubmit, this))
            .on('submit',   '#formChangeDescription',               _(this._onChangeDescriptionFormSubmit, this))
            .on('submit',   '#formSetFee',                          _(this._onSetFeeFormSubmit, this))
            .on('submit',   '#formSetOwner',                        _(this._onSetOwnerFormSubmit, this))
            ;

        var modalSettings = {
            backdrop: 'static',
            show: false
        };

        this.modalChangeWebsite.modal(modalSettings);
        this.modalChangeDescription.modal(modalSettings);
        this.modalConfirm.modal(modalSettings);

        this.getAccount();
        this.getEntryFee();

        this.watchForAccountChange();
        this.subscribeEvents();
    },

    /*************************************************************/
    /* HELPER METHODS                                            */
    /*************************************************************/
    countEstimateGas: function (form) {
        var estimateGas = this.REQUEST_MEMBERSHIP_BASE_GAS + 42000; // bulharská konstanta
        for (var k in this.inputs[form]) {
            estimateGas += this.inputs[form][k].val().length * this.REQUEST_MEMBERSHIP_GAS_PER_CHAR;
        }

        return estimateGas;
    },

    makeMessage: function (type, id, text, icon, canBeClosed) {
        var message = $('<div class="alert alert-' + type + '" id="' + id + '">' + text + '</div>');
        if (icon) {
            message.prepend('<i class="fas fa-'+icon+' mr-1"></i>');
        }
        if (canBeClosed) {
            message.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        }

        return message;
    },

    watchForAccountChange: function () {
        var accountInterval = setInterval(_(function () {
            if (this.defaultAddress) {
                if (web3.eth.accounts.length && web3.eth.accounts[0] !== this.defaultAddress) {
                    this.getAccount();
                }
                else if (!web3.eth.accounts.length && this.defaultAddress != -1) {
                    if (this.isOwner) {
                        this.memberListTable.find('thead tr th').eq(3).remove().end().eq(2).remove();
                        this.memberListTable.find('tbody tr').each(function () {
                            $(this).find('td').eq(3).remove().end().eq(2).remove();
                        });
                    }

                    this.isOwner = false;
                    this.panels.owner.addClass('d-none');
                    this.panels.member.addClass('d-none');
                    this.panels.notMember.addClass('d-none');
                    this.panels.canceled.addClass('d-none');
                    this.metaMaskNotLoggedInfo();
                }
            }
            
        }, this), 250);
    },

    subscribeEvents: function () {
        this.instance.CreateOrganisation(_(this._onCreateOrganisation, this));
        this.instance.ChangeURL(_(this._onChangeURL, this));
        this.instance.ChangeDescription(_(this._onChangeDescription, this));
        this.instance.DeactivateOrganisation(_(this._onDeactivateOrganisation, this));
        this.instance.ReactivateOrganisation(_(this._onReactivateOrganisation, this));
    },

    metaMaskNotLoggedInfo: function () {
        this.defaultAddress = -1;
        this.panels.list.find('.card-body').prepend(this.makeMessage('info', '', 'Zdá se, že používáte MetaMask, ale nejste přihlášeni. Pro všechny funkce se prosím přihlaste.', 'info-circle', true));
    },

    /*************************************************************/
    /* ACCOUNT METHODS                                           */
    /*************************************************************/
    getAccount: function () {
        web3.eth.getAccounts(_(this.setAccount, this));
    },

    setAccount: function (e, r) {
 
        if (r) {
            if (r.length) {
                this.defaultAddress = r[0];
                this.checkOwner();
            }
            else {
                this.metaMaskNotLoggedInfo();
                this.getMembers();
            }
        }
        else {
            this.getMembers();
            this.panels.noConnection
                .removeClass('d-none')
                .prepend(this.makeMessage('warning', '', 'Ve vašem prohlížeči není dostupný ani MetaMask, ani lokální Ethereový nód.', 'exclamation-triangle'));
        }
    },

    checkOwner: function () {
        this.instance.owner(_(this.setOwner, this));
    },

    setOwner: function (e, r) {
        this.isOwner = this.defaultAddress === r;
        this.inputs.owner.newOwner.val(r);
        this.panels.owner.toggleClass('d-none', !this.isOwner);
        this.checkMember();
        this.getMembers();
    },

    checkMember: function () {
        if (this.defaultAddress) {
            this.instance.members(this.defaultAddress, _(this.setMember, this));
        }
    },

    setMember: function (e, r) {
        if (r != null) {

            this.panels.member.toggleClass('d-none', r[3] !== true || r[4] !== true);
            this.panels.notMember.toggleClass('d-none', r[3] === true || this.isOwner);
            this.panels.canceled.toggleClass('d-none', r[4] === true || r[3] === false || this.isOwner);

            if (r[3] === true && r[4] === true) {
                $('#myOrgName').html(r[0]);
                $('#myOrgWebsite').html(r[1]);
                $('#myOrgDescription').html(r[2]);
            }
        }
    },

    /*************************************************************/
    /* FEE METHODS                                               */
    /*************************************************************/
    getEntryFee: function () {
        this.instance.membershipFee(_(this.setEntryFee, this));
    },

    setEntryFee: function (e, r) {
        $('#entryFee').val(web3.fromWei(r, 'ether') + ' ETH');
        this.inputs.fee.newFee.val(web3.fromWei(r));
        this.entryFee = r;
    },

    /*************************************************************/
    /* OWNER METHODS                                             */
    /*************************************************************/
    changeFee: function () {
        this.instance.admin_setMembershipFee(
            web3.toWei(this.inputs.fee.newFee.val(), 'ether'),
            { gas: 210000 },
            _(this._onFeeChanged, this)
        );
    },

    changeOwner: function () {

    },

    deactivateMember: function (address) {
        this.instance.admin_deactivateMemberAccount(
            address,
            { gase: 210000 },
            _(this._onMemberDeactivated, this)
        );  
    },

    reactivateMember: function (address) {
        this.instance.admin_reactivateMemberAccount(
            address,
            { gas: 210000 },
            _(this._onMemberReactivated, this)
        );
    },

    watchSetEntryFeeTransaction: function (txHash) {
        var hash = txHash;
        var timer = setInterval(function () {
            web3.eth.getTransactionReceipt(hash, function (e, r) {
                if (r != null)
                {
                    SC.inputs.fee.newFee.attr('disabled', false);
                    $('#btnSetEntryFee').attr('disabled', false);
                    $('#setFeeMessage').remove();

                    if (r['status'] == '0x1') {
                        SC.getEntryFee();                        
                    }
                    else {
                        SC.panels.owner.find('.card-body').prepend(SC.makeMessage('danger', '', 'An unexpected error occured while changing entry fee. Please try again later.', 'exclamation-circle', true));
                    }

                    clearTimeout(timer);
                }
            });
        }, 2000);
    },

    validateFeeForm: function () {
        this.inputs.fee.newFee.val(this.inputs.fee.newFee.val().replace(/[^0-9.,]/g, '').replace(/,/, '.'));
        if (!this.inputs.fee.newFee.val().match(/^\d+(\.\d+)?$/)) {
            if (!this.inputs.fee.newFee.is('.is-invalid')) {
                this.inputs.fee.newFee
                    .addClass('is-invalid')
                    .parent()
                    .find('.input-group-text').addClass('bg-danger text-white border-danger').end()
                        .append('<div class="invalid-feedback">Please enter valid number.');

                $('#btnSetEntryFee').attr('disabled', true);
            }
            return false;
        }
        else if (this.inputs.fee.newFee.is('.is-invalid')) {
            this.inputs.fee.newFee
                .removeClass('is-invalid')
                .parent()
                    .find('.input-group-text').removeClass('bg-danger text-white border-danger').end()
                    .find('.invalid-feedback').remove();

            $('#btnSetEntryFee').attr('disabled', false);
        }
        return true;
    },

    validateOwnerForm: function () {

    },

    /*************************************************************/
    /* MEMBER METHODS                                            */
    /*************************************************************/
    getMembers: function () {
        var self = this;
        setTimeout(function () {
            $.get('/api/Members', _(self.setMemberList, self));
        }, 250);
    },

    setMemberList: function (data) {
        //console.log(data);

        var body = this.memberListTable.find('tbody');
        if (this.isOwner && this.memberListTable.find('thead tr th').length == 2) {
            this.memberListTable.find('thead tr').append('<th width="34.4"></th><th width="80">Actions</th>');
        }

        body.html('');
        for (var i = 0; i < data.length; i++) {
            if (!data[i].isActive && !this.isOwner) {
                continue;
            }

            var row = $('<tr><td></td><td></td></tr>');
            row.find('td')
                .eq(0).html(data[i].organizationName).end()
                .eq(1).html(data[i].organizationWebsite);

            if (this.isOwner) {
                row.append('<td class="bg-' + (data[i].isActive ? 'success' : 'danger') + '"></td>');
                row.append('<td class="text-center"></td>');

                for (var k in this.ownerActions) {
                    var action = this.ownerActions[k];
                    var icon = $('<a href="#" class="fas actionIcon mx-2"></a>');

                    if (data[i].isActive !== action.forActive) {
                        icon.addClass('disabled').css('opacity', 0.2);
                    }
                    
                    icon.addClass(action.className).attr({
                        'title': action.title,
                        'data-address': data[i].accountAddress,
                        'data-action': k
                    }).appendTo(row.find('td:last-child'));
                }
            }

            body.append(row);
        }
    },

    registerMember: function () {
        if (this.validateRegForm()) {
            this.instance.public_requestMembership(
                this.inputs.membershipRequest.orgName.val(),
                this.inputs.membershipRequest.orgWebsite.val(),
                this.inputs.membershipRequest.orgDescription.val(),
                { value: this.entryFee, gas: this.countEstimateGas('membershipRequest') },
                _(this._onRegistrationComplete, this)
            );
        }
    },

    changeWebsite: function () {
        this.instance.member_changeOrgWebsite(
            this.inputs.changeWebsite.newWebsite.val(),
            { gas: this.countEstimateGas('changeWebsite') },
            _(this._onWebsiteChanged, this)
        );
    },

    changeDescription: function () {
        this.instance.member_changeOrgDescription(
            this.inputs.changeDescription.newDescription.val(),
            { gas: this.countEstimateGas('changeDescription') },
            _(this._onDescriptionChanged, this)
        );
    },

    cancelMembership: function () {
        this.instance.member_cancelMembership(
            { gas: 30000 },
            _(this._onMembershipCanceled, this)
        );
    },
    
    validateRegForm: function () {
        var estimateGas = this.countEstimateGas('membershipRequest');
        if (estimateGas > this.MAX_GAS) {
            if (!this.inputs.membershipRequest.orgDescription.is('.is-invalid')) {
                this.inputs.membershipRequest.orgDescription
                    .addClass('is-invalid')
                    .after('<div class="invalid-feedback">Description is too long.</div>');

                $('#regFormSubmit').attr('disabled', true);
            }

            return false;
        }
        else if (this.inputs.membershipRequest.orgDescription.is('.is-invalid')) {
            this.inputs.membershipRequest.orgDescription
                .removeClass('is-invalid')
                .next('.invalid-feedback').remove();

            $('#regFormSubmit').attr('disabled', false);
        }
        return true
    },

    validateWebsiteForm: function () {
        var isValid = true;

        if (!this.inputs.changeWebsite.newWebsite.val().length) {
            isValid = false;
            if (!this.inputs.changeWebsite.newWebsite.is('.is-invalid')) {
                this.inputs.changeWebsite.newWebsite
                    .addClass('is-invalid')
                    .after('<div class="invalid-feedback">Please fill-in Your website URL.');

                $('#btnSaveWebsite').attr('disabled', true);
            }
        }

        if (isValid && this.inputs.changeWebsite.newWebsite.is('.is-invalid')) {
            this.inputs.changeWebsite.newWebsite
                .removeClass('is-invalid')
                .next('.invalid-feedback').remove();

            $('#btnSaveWebsite').attr('disabled', false);
        }

        return isValid;
    },

    validateDescriptionForm: function () {
        var isValid = true;
        var estimateGas = this.countEstimateGas('changeDescription');
        if (estimateGas > this.MAX_GAS) {
            if (!this.inputs.changeDescription.newDescription.is('.is-invalid')) {
                this.inputs.changeDescription.newDescription
                    .addClass('is-invalid')
                    .after('<div class="invalid-feedback">Please fill-in Your website URL.');

                $('#btnSaveDescription').attr('disabled', true);
            }
            isValid = false;
        }
        else if (this.inputs.changeDescription.newDescription.is('.is-invalid')) {
            this.inputs.changeDescription.newDescription
                .removeClass('is-invalid')
                .next('.invalid-feedback').remove();

            $('#btnSaveDescription').attr('disabled', false);
        }

        return isValid;
    },

    /*************************************************************/
    /* EVENTS                                                    */
    /*************************************************************/

    // SUMBIT
    _onRegFormSubmit: function () {
        this.registerMember();
        return false;
    },

    _onChangeWebsiteFormSubmit: function () {
        if (this.validateWebsiteForm()) {
            this.changeWebsite();
        }
        return false;
    },

    _onChangeDescriptionFormSubmit: function () {
        if (this.validateDescriptionForm()) {
            this.changeDescription();
        }
        return false;
    },

    _onSetFeeFormSubmit: function () {
        if (this.validateFeeForm()) {
            this.changeFee();
        }

        return false;
    },

    _onSetOwnerFormSubmit: function () {
        if (this.validateOwnerForm()) {
            this.changeOwner();
        }

        return false;
    },

    // KEYUP
    _onRegFormKeyUp: function () {
        this.validateRegForm();
    },

    _onNewEntryFeeKeyUp: function () {
        this.validateFeeForm();
    },

    // CHANGE
    _onNewWebsiteChange: function () {
        this.validateWebsiteForm();
    },

    _onNewDescriptionChange: function () {
        this.validateDescriptionForm();
    },
    
    // CLICK
    _onEditWebsiteClick: function () {
        this.modalChangeWebsite.modal('show');
        this.modalChangeWebsite.find('.alert').remove();
        this.inputs.changeWebsite.newWebsite.val($('#myOrgWebsite').text()).select().focus();
    },

    _onEditDescriptionClick: function () {
        this.modalChangeDescription.modal('show');
        this.modalChangeDescription.find('.alert').remove();
        this.inputs.changeDescription.newDescription.val($('#myOrgDescription').text()).focus();
    },

    _onBtnCancelMembershipClick: function () {
        $('#ConfirmMessage').html('Do You really want to cancel Your membership? You <strong>will not</strong> be refunded.');
        $(document).on('click', '#btnYes', _(function () {
            this.cancelMembership();
        }, this));

        this.modalConfirm.modal('show');
    },

    _onBtnNoClick: function () {
        $(document).off('click', '#btnYes');
        this.modalConfirm.modal('hide');
    },

    _onActionIconClick: function (event) {

        var elm = $(event.target);
        if (!elm.is('.disabled')) {
            this.currentActionTarget = elm;
            switch (elm.attr('data-action')) {
                case 'deactivate': this.deactivateMember(elm.attr('data-address')); break;
                case 'reactivate': this.reactivateMember(elm.attr('data-address')); break;
            }
        }

        return false;
    },

    // CALLBACK
    _onRegistrationComplete: function (e, r) {
        if (r != null) {
            for (var k in this.inputs.membershipRequest) {
                this.inputs.membershipRequest[k].val('');
            }

            $('#regForm')
                .addClass('d-none')
                .before(this.makeMessage('success', 'regMessage', 'Thank you for your registration. Please wait a while until transaction is confirmed.', 'check'));
        }
    },

    _onWebsiteChanged: function (e, r) {
        if (e) {
            $('#formChangeWebsite').before(this.makeMessage('danger', '', 'An unexpected error occured. Please try again later', 'exclamation-circle', true));
        }
        else if (r) {
            this.panels.member.find('.card-body').prepend(this.makeMessage('success', '', 'Your organization website will be updated shortly', 'check', true));
            $('#myOrgWebsite').addClass('text-black-50');
            this.modalChangeWebsite.modal('hide');
        }
    },

    _onDescriptionChanged: function (e, r) {
        if (e) {
            $('#formChangeDescription').before(this.makeMessage('danger', '', 'An unexpected error occured. Please try again later', 'exclamation-circle', true));
        }
        else if (r) {
            this.panels.member.find('.card-body').prepend(this.makeMessage('success', '', 'Your organization description will be updated shortly', 'check', true));
            $('#myOrgDescription').addClass('text-black-50');
            this.modalChangeDescription.modal('hide');
        }
    },

    _onMembershipCanceled: function (e, r) {
        if (e) {
            this.panels.member.find('.card-body').prepend(this.makeMessage('danger', '', 'An unexpected error ocurred while canceling Your membership. Please try again later.', 'exclamation-circle', true));
        }
        else if (r) {
            this.panels.member.find('.card-body').prepend(this.makeMessage('success', '', 'Your membership was successfully canceled. Please wait a while until transaction is confirmed.', 'check'));
            this.panels.member.find('.card-body dl').addClass('d-none');
            $('#btnCancelMembership').addClass('d-none');
        }

        $(document).off('click', '#btnYes');
        this.modalConfirm.modal('hide');
    },

    _onFeeChanged: function (e, r) {
        //console.log(e);
        if (e) {
            this.panels.owner.find('.card-body').prepend(this.makeMessage('danger', '', 'An unexpected error occured while changing entry fee. Please try again later.', 'exclamation-circle', true));
        }
        else if (r) {
            this.panels.owner.find('.card-body').prepend(this.makeMessage('success', 'setFeeMessage', 'Entry fee was successfully changed. Please wait a while until transaction is confirmed', 'check'));

            this.inputs.fee.newFee.attr('disabled', true);
            $('#btnSetEntryFee').attr('disabled', true);

            this.watchSetEntryFeeTransaction(r);
        }
    },

    _onMemberReactivated: function (e, r) {
        var elm = this.currentActionTarget;
        elm.addClass('disabled').css('opacity', 0.2);
        elm.prev().removeClass('disabled').css('opacity', 1);
        elm.parent().prev().removeClass('bg-danger').addClass('bg-success');
    },

    _onMemberDeactivated: function (e, r) {
        var elm = this.currentActionTarget;
        elm.addClass('disabled').css('opacity', 0.2);
        elm.next().removeClass('disabled').css('opacity', 1);
        elm.parent().prev().removeClass('bg-danger').addClass('bg-success');
    },

    /*************************************************************/
    /* SMART CONTRACT EVENTS                                     */
    /*************************************************************/
    _onCreateOrganisation: function (e, r) {
        if (r != null) {
            $('#regMessage').remove();
            SC.panels.notMember.addClass('d-none');
            SC.panels.member.removeClass('d-none');
            this.checkMember();
        }
    },

    _onChangeURL: function (e, r) {
        $('#myOrgWebsite').removeClass('text-black-50');
        if (r != null) {
            $('#myOrgWebsite').html(SC.inputs.changeWebsite.newWebsite.val());                
        }
        else {
            SC.panels.member.find('.card-body').prepend(SC.makeMessage('danger', '', 'An unexpected error occured while changing Your organization website. Please try again later.', 'exclamation-circle', true));
        }
    },

    _onChangeDescription: function (e, r) {
        $('#myOrgDescription').removeClass('text-black-50');
        if (r != null) {
            $('#myOrgDescription').html(SC.inputs.changeDescription.newDescription.val());
        }
        else {
            SC.panels.member.find('.card-body').prepend(SC.makeMessage('danger', '', 'An unexpected error occured while changing Your organization description. Please try again later.', 'exclamation-circle', true));
        }
    },

    _onDeactivateOrganisation: function (e, r) {
        if (r != null && r.args[""] == this.defaultAddress) {
            SC.panels.member.find('.alert').remove();
            SC.panels.member.find('card-body dl').removeClass('d-none');
            $('#btnCancelMembership').removeClass('d-none');

            SC.panels.member.addClass('d-none');
            SC.panels.canceled.removeClass('d-none');
        }
        this.getMembers();
    },

    _onReactivateOrganisation: function (e, r) {
        if (r != null && r.args[""] == this.defaultAddress) {
            SC.panels.member.removeClass('d-none');
            SC.panels.canceled.addClass('d-none');

            this.checkMember();
        }
        this.getMembers();
    }
};

$(_(SC.init, SC));
