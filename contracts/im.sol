// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract im{
    struct user {
        bytes32[] messageTdataHash; //store store training data request message hash
        bytes32[] IPFStdataHash; //training data IPFS hash
        bytes32[] messageMdataHash; //store store model data request message hash
        bytes32[] IPFSmdataHash; //model data IPFS hash
    }

    mapping (address => user) Users;

    event TdataHashStored(address _Addr, bytes32 _msghash, bytes32 _tdipfshash); //td=training data
    event MdataHashStored(address _Addr, bytes32 _msghash, bytes32 _mdipfshash); //md=model data

    function StoreTdataHash(bytes32 _messageTdataHash, bytes32 _IPFStdataHash) public {
        Users[msg.sender].messageTdataHash.push(_messageTdataHash);
        Users[msg.sender].IPFStdataHash.push(_IPFStdataHash);

        emit TdataHashStored(msg.sender, _messageTdataHash, _IPFStdataHash);
    }

    function StoreMdataHash(bytes32 _messageMdataHash, bytes32 _IPFSmdataHash) public {
        Users[msg.sender].messageMdataHash.push(_messageMdataHash);
        Users[msg.sender].IPFSmdataHash.push(_IPFSmdataHash);

        emit MdataHashStored(msg.sender, _messageMdataHash, _IPFSmdataHash);
    }

    function checkIPFStdataHash(bytes32 _IPFStdataHash) public view returns(bool) {
        bool check = false;
        for(uint i=0; i < Users[msg.sender].IPFStdataHash.length; i++) {
            if(Users[msg.sender].IPFStdataHash[i] == _IPFStdataHash) {
                check = true;
                break;
            }
        }
        return check;
    }
}