const apitoken = artifacts.require("apitoken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("apitoken", function (accounts) {
  var apitokenInstance;

  it("successfull store list services hash", function() {
    return apitoken.deployed().then(function(instance) {
        apitokenInstance = instance;
      return apitokenInstance.StorelistServicesHash("0x2cd9bf92c5e20b1b410f5ace94d963a96e89156fbe65b70365e8596b37f1f165", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "listServicesStored", "the event type is correct");
    });
  });

  it("successfull store Utoken", function() {
    return apitoken.deployed().then(function(instance) {
        apitokenInstance = instance;
      return apitokenInstance.StoreUtoken("0xe550e86a1cff1e2f186fd76c65d873b20e6887f8675a1ede6e1d3a7acccc7ca8", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "utokenStored", "the event type is correct");
    });
  });

  it("get the correct Utoken value", function() {
    return apitoken.deployed().then(function(instance) {
        apitokenInstance = instance;
      return apitokenInstance.getUtoken(accounts[1]);
    }).then(function(utoken) {
      assert.equal(utoken, "0xe550e86a1cff1e2f186fd76c65d873b20e6887f8675a1ede6e1d3a7acccc7ca8", "contains the correct Utoken");
    });
  });

});
