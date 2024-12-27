import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./constants";

function App() {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [balance, setBalance] = useState("0");

    // Connect Wallet
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("MetaMask is required!");
                return;
            }
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);

            // Fetch balance
            const provider = new ethers.providers.Web3Provider(ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
            const bal = await contract.balanceOf(accounts[0]);
            setBalance(ethers.utils.formatUnits(bal, 18));
        } catch (error) {
            console.error(error);
        }
    };
const mintRewards = async (recipient, amount) => {
    try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        const tx = await contract.mintReward(recipient, ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Rewards minted successfully!");
    } catch (error) {
        console.error(error);
    }
};
    const burnTokens = async (amount) => {
    try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        const tx = await contract.burnTokens(ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Tokens burned successfully!");
    } catch (error) {
        console.error(error);
    }
};
    return (
        <div>
            <h1>Thinking Coin DApp</h1>
            {currentAccount ? (
                <div>
                    <p>Wallet Connected: {currentAccount}</p>
                    <p>Balance: {balance} TCOIN</p>
                </div>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
}
export default App;
