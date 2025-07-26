// const MarketView = () => {
//   const dummyData = [
//     { name: "Houston", value: 8020 },
//     { name: "Phoenix", value: 7650 },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Market View</h1>
//       <ul className="space-y-2">
//         {dummyData.map((item, i) => (
//           <li key={i} className="flex justify-between bg-white p-3 rounded shadow">
//             <span>{item.name}</span>
//             <span>{item.value}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MarketView;
import StatCard from "../components/StatCard";

const MarketView = () => {
  const fullHomesClosed = [...Array(50)].map((_, i) => ({
    name: `MSA ${i + 1}`,
    value: Math.floor(Math.random() * 10000),
  }));

  const top10 = fullHomesClosed.slice(0, 10);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <StatCard title="Top 10 MSA by Homes Closed" topData={top10} fullData={fullHomesClosed} />
      <StatCard title="Top 10 MSA by Average Price Increase" topData={top10} fullData={fullHomesClosed} />
      <StatCard title="Top 10 MSA by Sales Pace" topData={top10} fullData={fullHomesClosed} />
      <StatCard title="Top 10 MSA by New Homes Added" topData={top10} fullData={fullHomesClosed} />
    </div>
  );
};

export default MarketView;
