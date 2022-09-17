//const builtin = artifacts.require("./contracts/builtin.sol");
const Token = artifacts.require("Token");

module.exports = function (deployer) {
    //deployer.deploy(builtin).then(() => {
    deployer.deploy(Token, "0x17ACC76e4685AEA9d574705163E871b83e36697f");
};
