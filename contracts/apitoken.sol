// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract apitoken{
    struct user {
        bytes32 listServicesHash; //store list of services data hash
        bytes32 Utoken; //store user token
    }

    mapping (address => user) Users;

    event listServicesStored(address _Addr, bytes32 _hashvalue);
    event utokenStored(address _Addr, bytes32 _utoken);

    function StorelistServicesHash(bytes32 _listServicesHash) public {
        Users[msg.sender].listServicesHash = _listServicesHash;

        emit listServicesStored(msg.sender, _listServicesHash);
    }

    function StoreUtoken(bytes32 _utoken) public {
        Users[msg.sender].Utoken = _utoken;

        emit utokenStored(msg.sender, _utoken);
    }

    function getUtoken(address _addr) public view returns(bytes32) {
        return Users[_addr].Utoken;
    }
}