const UniswapRouter = artifacts.require("UniswapV2Router02");

module.exports = function(deployer) {
  deployer.deploy(UniswapRouter, '0x603Db5Bf865DBBB4778c353930e795823e095b36', '0x7cee2ae3042D2C646Aa24FACfA92dfeE589046f0');
};