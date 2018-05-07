pragma solidity 0.4.23;
pragma experimental ABIEncoderV2; // Experimental ABI encoder, only used for easy access to public data for front end visualisation

import "./Zeppelin/ownership/Ownable.sol";

contract DLT_guardian_membership is Ownable {
    
    struct Organisation {
        string name;
        string website;
        string description;
        bool registered;
        bool active;
    }

    address public walletAccount; // Account that receives ETH from membeship fees
    uint public membershipFee; // Required fee for new members
    address[] public memberAddresses; // Addresses of registered members, both active and inactive
    mapping (address => Organisation) private members; // Complete data of registered members
    // TODO: add document timestamp

    constructor() public Ownable() {
    }

    modifier onlyActiveMember() { // Checks if the sender owns an active organisation
        require(members[msg.sender].active);
        _;
    }

    // Methods that can be called by admin (contract owner)

    function admin_setWalletAccount(address _walletAccount) public onlyOwner { // Allows owner to change the address that receives membeship fees
        require(_walletAccount != 0); // Prevent setting an empty account
        walletAccount = _walletAccount;
    }

    function admin_setMembershipFee(uint _membershipFee) public onlyOwner { // Allows owner to change membership fee amount
        membershipFee = _membershipFee;
    }

    function admin_deactivateMemberAccount(address _memberAddress) public onlyOwner { // Deactivate account of a registered member (for violating conditions)
        require(members[_memberAddress].registered);
        members[_memberAddress].active = false;
    }
    function admin_reactivateMemberAccount(address _memberAddress) public onlyOwner { // Reactivate a previously deactivated account
        require(members[_memberAddress].registered);
        members[_memberAddress].active = true;
    }
    function admin_sweepEth() external onlyOwner { // Sweeps ether incorrectly sent to this contract to wallet account (should not be necessary)
        // solium-disable-next-line security/no-send
        assert(walletAccount.send(address(this).balance));
    }

    // Methods that can be called by members

    function member_changeOrgWebsite(string _newDescription) public onlyActiveMember {
        members[msg.sender].description = _newDescription;
    }

    function member_changeOrgDescription(string _newDescription) public onlyActiveMember {
        members[msg.sender].description = _newDescription;
    }
    function member_cancelMembership() public onlyActiveMember { // Allows a member to deactivate their own organisation
        members[msg.sender].active = false;
    }

    // Methods that can be called by anyone

    function public_requestMembership(string _orgName, string _orgWebsite, string _orgDescription) public payable { // Public function, anyone can purchase membership
        require(walletAccount != 0); // Requires wallet account to be set before registration is allowed (to prevent loss of eth)
        require(msg.value >= membershipFee); // Revert transaction if amount is too small
        require(members[msg.sender].registered == false); // Allow only one organisation per address

        require(walletAccount.send(msg.value)); // Send registration fee to wallet account, check for success

        memberAddresses.push(msg.sender); // Add address to registered list
        members[msg.sender] = Organisation({
            name: _orgName,
            website: _orgWebsite,
            description: _orgDescription,
            registered: true,
            active: true
        });
    }

    function public_getMemberCount() public view returns (uint) { // Used for front end visualisation
        return memberAddresses.length;
    }

    function public_getMemberAtIndex(uint _index) public view returns(Organisation) { // Used for front end visualisation
        require(_index < memberAddresses.length);
        return members[memberAddresses[_index]];
    }
}
