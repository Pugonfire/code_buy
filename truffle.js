/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const PrivateKeyProvider = require("truffle-privatekey-provider");
const networkRPCURL = "http://bops-t.morpheuslabs.io:26918";
const privateKey = "0xc115f2ca701618bfc73126f1cac91beba7a59511801df72ee41465ddef9931a5";


module.exports = {
  networks: {
    development: {
        provider: function() {
            return new PrivateKeyProvider(privateKey, networkRPCURL)
        },
        network_id: 1, 
        gas: 6000000,
        gasPrice: 500000000000
    }
  },

  compilers: {
    solc: {
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
       }
    }
  }
}
