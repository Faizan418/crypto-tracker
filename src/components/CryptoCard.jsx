"use client";
import { useTheme } from "@/components/ThemeContext";
import { useState, useEffect } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { getHistoricalData } from "@/lib/cryptoApi";

export default function CryptoCard({
  name,
  coinId,
  priceUSD,
  pricePKR,
  change24h,
}) {
  const { theme } = useTheme();
  const isPositive = change24h >= 0;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHistoricalData(coinId);
        const formattedData = data.map((price, index) => ({
          price,
          name: index,
        }));
        setChartData(formattedData);
      } catch (error) {
        console.error(error);
      }
    }

    if (coinId) {
      fetchData();
    }
  }, [coinId]);

  const cardBgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-200";
  const nameColorClass = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const changeColorClass = isPositive ? "text-green-500" : "text-red-500";
  const changeIcon = isPositive ? "↑" : "↓";

  const chartColor = isPositive ? "#00e676" : "#ff1744";

  return (
    <div
      className={`
      relative p-6 rounded-2xl border border-gray-700 shadow-lg
      flex-1 basis-80 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer
      ${cardBgClass}
    `}
    >
      <div className="flex items-center justify-between">
        <h3 className={`text-2xl font-bold mb-2 ${nameColorClass}`}>{name}</h3>
        <div className="bg-gray-700 text-gray-400 text-sm font-semibold px-2 py-1 rounded-full">
          {name.substring(0, 3).toUpperCase()}
        </div>
      </div>
      <p className="text-3xl font-bold mb-1">USD: ${priceUSD}</p>
      <div className="flex items-center gap-2 mt-2 mb-4">
        <p className={`font-bold text-lg ${changeColorClass}`}>
          <span className="mr-1">{changeIcon}</span>
          {change24h ? change24h.toFixed(2) + "%" : "N/A"}
        </p>
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          24h
        </p>
      </div>
      <div className="mt-4 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="price"
              stroke={chartColor}
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
