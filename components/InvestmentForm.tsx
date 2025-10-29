import { useState } from "react";
import WalletInfo from "./WalletInfo";

const InvestmentForm = ({ address, onInvestment }) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("usdt");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateTokens = (usdtAmount) => {
    return (usdtAmount / 100) * 1500;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!address) {
      alert("Please connect your wallet first.");
      setIsSubmitting(false);
      return;
    }
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 10) {
      alert("Minimum investment amount is 10 USDT");

      setError("Minimum investment amount is 10 USDT");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch("/api/investments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress: address,
          amountUSDT: amountNum,
          paymentMethod,
          transactionHash: paymentMethod === "usdt" ? "pending" : undefined,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to process investment");
      }
      const data = await response.json();
      onInvestment();
      setAmount("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Buy ChilledPanda Tokens</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-typography-700 mb-2">
            Amount (USDT)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="10"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-typography-600"
            placeholder="Minimum $10"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <select
            title="Payment Method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-typography-600"
          >
            <option value="usdt">USDT</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>

        {amount && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              You will receive:{" "}
              <strong>
                {calculateTokens(parseFloat(amount)).toLocaleString()} CPANDA
              </strong>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Rate: 1,500 CPANDA per $100 USDT
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold transition-colors"
        >
          Invest Now
        </button>
      </form>
      {paymentMethod === "usdt" && <WalletInfo />}
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
    </div>
  );
};

export default InvestmentForm;
