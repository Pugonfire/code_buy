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


const HDWalletProvider = require('truffle-hdwallet-provider');
const PrivateKeyProvider = require("truffle-privatekey-provider");

const gasPrice = 500000000; //process.env.GASPRICE;
const key = "eaafe8a2221a1d023fe55fd9df3f6784ae91746863e279b9f7a286722cbc6d22";
const url = "http://localhost:7545"

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

// console.log('Gas Price: ' + gasPrice + ' Wei');

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
