var TaskCreator = artifacts.require("./TaskCreator");

module.exports = function(deployer) {
  deployer.deploy(TaskCreator);
};
