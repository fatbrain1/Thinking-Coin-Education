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
            require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
    solidity: "0.8.17",
    networks: {
        mumbai: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: process.env.POLYGONSCAN_API_KEY,
    },
};


	5.	Add your private key and Polygonscan API key in a .env file:

PRIVATE_KEY=your_metamask_private_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key

Step 5: Write and Deploy the Thinking Coin Smart Contract
	1.	Create the Smart Contract:
	•	Write a basic ERC-20 token contract in contracts/ThinkingCoin.sol:

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ThinkingCoin is ERC20 {
    constructor() ERC20("Thinking Coin", "TCOIN") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

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
