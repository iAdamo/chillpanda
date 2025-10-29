import { useState, useEffect } from "react";
import { Box } from "./ui/box";

export default function PresaleStats() {
  const [stats, setStats] = useState({ totalRaised: 0, totalInvestors: 0 });
  const softCap = 50000000; // 50 million USDT

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/presale");
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const progress = (stats.totalRaised / softCap) * 100;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Presale Progress</h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Raised: ${stats.totalRaised.toLocaleString()}</span>
            <span>Goal: ${softCap.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <Box
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></Box>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{stats.totalInvestors}</div>
            <div className="text-sm">Total Investors</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">1,500</div>
            <div className="text-sm">Tokens per $100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
