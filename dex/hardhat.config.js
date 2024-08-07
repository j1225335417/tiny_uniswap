require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const mnemonic = process.env.MNEMONIC
const scankey = process.env.ETHERSCAN_API_KEY
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: 'dev',
  networks: {
    hardhat: {
      accounts: {
        mnemonic: mnemonic,
      },
    },
    dev: {
      url: "http://127.0.0.1:8545/",
      accounts: {
        mnemonic: mnemonic,
      },
    },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 5,
    },
    mumbai: {
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 80001,
    },

    sepolia: {
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 11155111,
    },


  },


  abiExporter: {
    path: './deployments/abi',
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: true,
  },

  etherscan: {
    apiKey: scankey
  },

};
