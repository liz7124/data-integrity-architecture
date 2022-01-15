const idma = artifacts.require("idma");
const apitoken = artifacts.require("apitoken");
const im = artifacts.require("im");

module.exports = function(deployer) {
    deployer.deploy(idma);
    deployer.deploy(apitoken);
    deployer.deploy(im);
}