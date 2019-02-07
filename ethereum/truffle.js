/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */


const PrivateKeyProvider = require("truffle-privatekey-provider");

const gasPrice = 500000000; //process.env.GASPRICE;
const key = "c115f2ca701618bfc73126f1cac91beba7a59511801df72ee41465ddef9931a5";
const url = "http://bops-t.morpheuslabs.io:26918"

// const getGasPrice = async function() {
//   let err, res;
//   [err, res] = await to (axios.get('https://www.etherchain.org/api/gasPriceOracle')).then(response => response.data.standard);
//
//   if (err) {
//     gasPrice = 10000000000;
//   } else {
//     gasPrice = res;
//   }
// };
//
// getGasPrice();

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {              // ganache development
      provider: function() {
        // return new HDWalletProvider(mnemonic, infuraMain)
        return new PrivateKeyProvider(key, url)
      },
      network_id: "*",
      gas: 6000000,
      gasPrice: gasPrice
    }
  }
};
