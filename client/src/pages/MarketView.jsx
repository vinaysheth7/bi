

import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import axios from "axios";

const MarketView = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/marketdata").then((res) => {
      setMarketData(res.data);
    });
  }, []);



  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {/* <StatCard title="Top 10 Markets by Price" topData={top10} fullData={marketData} />
      <StatCard title="Top 10 Markets by Price" topData={top10} fullData={marketData} />
      <StatCard title="Top 10 Markets by Price" topData={top10} fullData={marketData} />
      <StatCard title="Top 10 Markets by Price" topData={top10} fullData={marketData} /> */}
      <StatCard
        title="Top Communities"
        // topData={top10}
        fullData={marketData}
        displayField="community"
      />
      <StatCard
        title="Homesite Prices"
        // topData={top10}
        fullData={marketData}
        displayField="homesitePrice"
      />
      <StatCard
        title="Square Footage"
        // topData={top10}
        fullData={marketData}
        displayField="homesiteSqft"
      />
      <StatCard
        title="Zipcodes"
        // topData={top10}
        fullData={marketData}
        displayField="zipcode"
      />

    </div>
  );
};

export default MarketView;
