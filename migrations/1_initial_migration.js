const PermanentlyBurnable_ERC721 = artifacts.require("PermanentlyBurnable_ERC721");

module.exports = function (deployer) {
  deployer.deploy(PermanentlyBurnable_ERC721);
};
