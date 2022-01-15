const idma = artifacts.require("idma");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("idma", function (accounts) {
  var idmaInstance;

  it("successfull store registration hash", function() {
    return idma.deployed().then(function(instance) {
      idmaInstance = instance;
      return idmaInstance.StoreRegData("0x2cd9bf92c5e20b1b410f5ace94d963a96e89156fbe65b70365e8596b37f1f165", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "registrationDataStored", "the event type is correct");
    });
  });

  it("successfull store Ucred", function() {
    return idma.deployed().then(function(instance) {
      idmaInstance = instance;
      return idmaInstance.StoreUcred("0xe550e86a1cff1e2f186fd76c65d873b20e6887f8675a1ede6e1d3a7acccc7ca8", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "ucredStored", "the event type is correct");
    });
  });

  it("successfull store Login hash", function() {
    return idma.deployed().then(function(instance) {
      idmaInstance = instance;
      return idmaInstance.StoreLoginData("0xd70179ff76878d9bbb30d3201fd27527559ef417d3ec7eee1c8dcfadfa562686", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "loginDataStored", "the event type is correct");
    });
  });

  it("get the correct Ucred value", function() {
    return idma.deployed().then(function(instance) {
      idmaInstance = instance;
      return idmaInstance.getUcred(accounts[1]);
    }).then(function(ucred) {
      assert.equal(ucred, "0xe550e86a1cff1e2f186fd76c65d873b20e6887f8675a1ede6e1d3a7acccc7ca8", "contains the correct Ucred");
    });
  });

});
