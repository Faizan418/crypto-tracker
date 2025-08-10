"use client";
import { useState, useEffect } from "react";
import { getCryptoPrices } from "@/lib/cryptoApi";
import CryptoCard from "@/components/CryptoCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

export default function HomePage() {
  const [prices, setPrices] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const data = await getCryptoPrices();
        setPrices(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch prices:", error);
        setLoading(false);
      }
    }

    fetchPrices();
    const intervalId = setInterval(fetchPrices, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredCoins = Object.entries(prices).filter(([key, value]) =>
    key.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredCoins.map(([key, value]) => (
              <CryptoCard
                key={key}
                name={key}
                coinId={key}
                priceUSD={value.usd}
                pricePKR={value.pkr}
                change24h={value.usd_24h_change}
              />
            ))}
            {filteredCoins.length === 0 && searchTerm !== "" && (
              <p className="text-center text-lg mt-10">No results found.</p>
            )}
          </div>
        )}
      </main>
    </>
  );
}
