const UniswapFactoryContract = artifacts.require("UniswapV2Factory");

module.exports = function(deployer) {
  deployer.deploy(UniswapFactoryContract, '0xc9769722e36eC9e24b543809372975e7fe6DE7df');
};