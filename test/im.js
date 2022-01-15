const im = artifacts.require("im");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("im", function (accounts) {
  var imInstance;

  it("successfull store training data request hash + IPFS hash", function() {
    return im.deployed().then(function(instance) {
        imInstance = instance;
      return imInstance.StoreTdataHash("0x2cd9bf92c5e20b1b410f5ace94d963a96e89156fbe65b70365e8596b37f1f165","0xd70179ff76878d9bbb30d3201fd27527559ef417d3ec7eee1c8dcfadfa562686", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "TdataHashStored", "the event type is correct");
    });
  });

  it("successfull store model data request hash + IPFS hash", function() {
    return im.deployed().then(function(instance) {
        imInstance = instance;
      return imInstance.StoreMdataHash("0xe550e86a1cff1e2f186fd76c65d873b20e6887f8675a1ede6e1d3a7acccc7ca8","0xd70179ff76878d9bbb30d3201fd27527559ef417d3ec7eee1c8dcfadfa562686", { from: accounts[1] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "MdataHashStored", "the event type is correct");
    });
  });

  it("successfull check training data IPFS hash", function() {
    return im.deployed().then(function(instance) {
        imInstance = instance;
      return imInstance.checkIPFStdataHash("0xd70179ff76878d9bbb30d3201fd27527559ef417d3ec7eee1c8dcfadfa562686", { from: accounts[1] });
    }).then(function(check) {
      assert.equal(check, true, "contains the correct checking value");
    });
  });

});
