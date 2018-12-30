const Unlock = artifacts.require('./Unlock.sol')
const shell = require('shelljs')

module.exports = function (deployer, network, accounts) {
  deployer.then(() => {
    if (network !== 'test') {
      if (
        shell.exec(
          `zos create Unlock --init initialize --args ${
            accounts[0]
          } --network ${network} --from ${accounts[9]}`
        ).code !== 0
      ) {
        throw new Error('Migration failed')
      }
    } else {
      console.log("Skipping proxy creation in 2_deploy_contracts.js while on network 'test'")
      return deployer.deploy(Unlock, accounts[0])
    }
  })
}
