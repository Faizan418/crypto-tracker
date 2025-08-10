export async function getCryptoPrices() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_COINGECKO_API_URL
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch crypto prices');
  }

  const data = await response.json();
  return data;
}

export async function getHistoricalData(coinId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COINGECKO_HISTORICAL_API_URL}${coinId}/market_chart?vs_currency=usd&days=1`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch historical data for ${coinId}`);
  }

  const data = await response.json();
  return data.prices.map(pricePoint => pricePoint[1]);
}