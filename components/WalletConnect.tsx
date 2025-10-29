import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const WalletConnect = ({ onAddressChange }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setWalletAddress(userAddress);
        onAddressChange(userAddress);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet extension.");
    }
  };
  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      if ((window as any).ethereum) {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          const userAddress = accounts[0].address;
          setWalletAddress(userAddress);
          onAddressChange(userAddress);
        }
      }
    };
    checkConnection();
  }, [onAddressChange]);
  return (
    <div className="flex items-center gap-4">
      {walletAddress ? (
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
