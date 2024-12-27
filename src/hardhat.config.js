require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
    solidity: "0.8.17",
    networks: {
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.PRIVATE_KEY],
        },
        goerli: {
            url: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
            accounts: [process.env.PRIVATE_KEY],
        },
        sepolia: {
            url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
            accounts: [process.env.PRIVATE_KEY],
        },
        bscTestnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            accounts: [process.env.PRIVATE_KEY],
        },
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: {
            polygonMumbai: process.env.POLYGONSCAN_API_KEY,
            goerli: process.env.ETHERSCAN_API_KEY,
        },
    },
};

module.exports = {
    solidity: "0.8.17",
    networks: {
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.PRIVATE_KEY],
        },
        goerli: {
            url: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
            accounts: [process.env.PRIVATE_KEY],
        },
        sepolia: {
            url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
            accounts: [process.env.PRIVATE_KEY],
        },
        bscTestnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            accounts: [process.env.PRIVATE_KEY],
        },
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: {
            polygonMumbai: process.env.POLYGONSCAN_API_KEY,
            goerli: process.env.ETHERSCAN_API_KEY,
        },
    },
};
