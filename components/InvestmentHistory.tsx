import { useState, useEffect, useCallback } from "react";

export default function InvestmentHistory({ address, refreshTrigger }) {
  const [investmentData, setInvestmentData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInvestmentHistory = useCallback(async () => {
    try {
      setLoading(true);
      const queryParam = address ? `?address=${address}` : "";
      const response = await fetch(`/api/investments${queryParam}`);
      const data = await response.json();

      if (data.investments) {
        setInvestmentData(data);
      }
    } catch (error) {
      console.error("Error fetching investment history:", error);
    } finally {
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    if (address) {
      fetchInvestmentHistory();
    }
  }, [address, refreshTrigger, fetchInvestmentHistory]);

  if (!address) {
    return (
      <section className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Your Investment History
        </h2>
        <div className="text-center py-8">
          <p className="text-gray-500">
            Please connect your wallet to view your investment history.
          </p>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Your Investment History
        </h2>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-4">Loading your investments...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Investment History
        </h2>
        <button
          onClick={fetchInvestmentHistory}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Refresh
        </button>
      </div>

      {investmentData && investmentData.investments.length > 0 ? (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                ${investmentData.totalInvested.toLocaleString()}
              </div>
              <div className="text-sm text-green-700 mt-1">Total Invested</div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {investmentData.totalTokens.toLocaleString()}
              </div>
              <div className="text-sm text-blue-700 mt-1">Total Tokens</div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {investmentData.investments.length}
              </div>
              <div className="text-sm text-purple-700 mt-1">
                Total Investments
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount (USDT)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tokens Received
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {investmentData.investments.map((investment, index) => (
                  <tr
                    key={investment._id || index}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {new Date(investment.timestamp).toLocaleDateString()}{" "}
                      {new Date(investment.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      ${investment.amountUSDT.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">
                      {investment.tokensReceived.toLocaleString()} CPANDA
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          investment.paymentMethod === "usdt"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {investment.paymentMethod === "usdt"
                          ? "USDT"
                          : "Credit Card"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      {investment.transactionHash &&
                      investment.transactionHash !== "pending" ? (
                        <a
                          href={`https://etherscan.io/tx/${investment.transactionHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-xs"
                        >
                          View on Explorer
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs">Manual</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Token Allocation Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Token Distribution
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Your ChilledPanda tokens (CPANDA) will be distributed after
                    the presale concludes. You'll be able to claim them directly
                    from this dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No investments yet
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by making your first investment in ChilledPanda tokens.
          </p>
        </div>
      )}
    </section>
  );
}
