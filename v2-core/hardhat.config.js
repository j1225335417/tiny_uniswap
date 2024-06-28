require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');
let dotenv = require('dotenv')
dotenv.config({ path: './.env' })

task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const account = process.env.GOERLI_PRIVATE_KEY
const alchemyApiKey = process.env.ALCHEMY_API_KEY
const alchemySepoliaApiKey = process.env.ALCHEMY_API_KEY
const etherscanKey = process.env.ETHERSCAN_KEY
const mumbaiKey = process.env.MUMBAI_KEY
const mumbaiScanApiKey = process.env.MUMBAI_POLYGON_API_KEY

module.exports = {
  solidity: '0.5.16',
  // solidity: {
  //     version: "0.5.16",
  //     settings: {
  //         optimizer: {
  //             enabled: true,
  //             runs: 200
  //         }
  //     }
  // },

  abiExporter: {
    path: './deployments/abi',
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: true
  },
  networks: {
    hardhat: {},
    dev: {
      url: 'http://127.0.0.1:8545',
      // chainId: 1337
    },
    // goerli: {
    //   url: `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
    //   accounts: [account]
    // },
    // sepolia: {
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${alchemySepoliaApiKey}`,
    //   accounts: [account]
    // },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemySepoliaApiKey}`,
    //   accounts: [account]
    // }
  },
  defaultNetwork: 'dev',
  etherscan: {
    apiKey: `${etherscanKey}`
  },
}