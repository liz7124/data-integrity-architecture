// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract idma{
    struct user {
        bytes32 regHash; //store registration data hash
        bytes32 Ucred; //store user credentials
        bytes32[] loginHash;
    }

    mapping (address => user) Users;

    event registrationDataStored(address _Addr, bytes32 _hashvalue);
    event ucredStored(address _Addr, bytes32 _ucred);
    event loginDataStored(address _Addr, bytes32 _hashvalue);

    function StoreRegData(bytes32 _regHash) public {
        Users[msg.sender].regHash = _regHash;

        emit registrationDataStored(msg.sender, _regHash);
    }

    function StoreUcred(bytes32 _ucred) public {
        Users[msg.sender].Ucred = _ucred;

        emit ucredStored(msg.sender, _ucred);
    }

    function StoreLoginData(bytes32 _loginHash) public {
        Users[msg.sender].loginHash.push(_loginHash);

        emit loginDataStored(msg.sender, _loginHash);
    }

    function getUcred(address _addr) public view returns(bytes32) {
        return Users[_addr].Ucred;
    }
}