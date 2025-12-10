// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminForm from "./AdminForm";
import Login from "./Login";
import RegionalDrawResults from "./RegionalDrawResults";
import Disclaimer from "./Disclaimer";

const LoadingScreen = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Loading Satta Results...</h1>
      <p className="text-gray-600 text-lg">Fast • Accurate • Simple</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Big Green Title */}
        <header className="bg-white py-6 shadow-md border-b-4 border-green-600">
          <h1 className="text-center text-5xl md:text-7xl font-extrabold text-green-600 tracking-wider">
            SATTA KING GOLD
          </h1>
        </header>

        {/* Single Centered Disclaimer with Read More */}
        <div className="bg-white border border-gray-300 mx-4 md:mx-auto md:max-w-4xl mt-6 rounded shadow-sm">
          <div className="px-6 py-4 text-center text-sm text-gray-700 leading-relaxed">
            <strong>DISCLAIMER:</strong> This website is an independent media portal for informational and journalistic purposes only. 
            As a non-transactional service, we are not affiliated with any entity mentioned. Users are solely responsible for complying with all applicable laws in their jurisdiction. 
            <Link to="/disclaimer" className="text-green-600 font-semibold underline ml-1">
  Read More →
</Link>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/admin" element={<AdminForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/disclaimer" element={<Disclaimer />} /> 
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

interface ChartRow {
  date: string;
  ds: string;
  gl: string;
  fb: string;
  gz: string;
}

const HomeContent = () => {
  // Generate dates from 1 Dec to today (11 Dec 2025)
  const today = new Date();
  const currentDay = today.getDate(); // number: 11
  const month = today.toLocaleString("default", { month: "short" }); // "Dec"

  const chartData: ChartRow[] = Array.from({ length: currentDay }, (_, i) => {
    const day = currentDay - i; // newest first
    const isToday = day === currentDay;
    return {
      date: `${day} ${month}`,
      ds: isToday ? "--" : String(Math.floor(Math.random() * 100)).padStart(2, "0"),
      gl: isToday ? "--" : String(Math.floor(Math.random() * 100)).padStart(2, "0"),
      fb: isToday ? "--" : String(Math.floor(Math.random() * 100)).padStart(2, "0"),
      gz: isToday ? "--" : String(Math.floor(Math.random() * 100)).padStart(2, "0"),
    };
  }).reverse(); // oldest first (1 Dec at top)

  return (
    <div className="space-y-8">

      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Satta King Gold</h2>
        <p className="text-gray-600 text-lg mb-6">Fastest Live Results • All Markets • 100% Accurate</p>
        <div className="flex flex-wrap justify-center gap-6 text-green-600 font-semibold text-lg">
          <Link to="/" className="hover:underline">Satta King</Link>
          <span>•</span>
          <a href="#" className="hover:underline">Black Satta</a>
          <span>•</span>
          <a href="#" className="hover:underline">Satta Chart</a>
          <span>•</span>
          <a href="#" className="hover:underline">Monthly Record</a>
        </div>
      </div>

      {/* Live Results */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 text-white text-center py-4 text-xl font-bold">
          Today's Live Satta Results
        </div>
        <RegionalDrawResults />
      </div>

      {/* Monthly Chart - From 1st to Today */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-4 text-xl font-bold">
          Monthly Charts & Records • December 2025
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 border-l border-gray-700">Desawar</th>
                <th className="px-4 py-3 border-l border-gray-700">Gali</th>
                <th className="px-4 py-3 border-l border-gray-700">Faridabad</th>
                <th className="px-4 py-3 border-l border-gray-700">Ghaziabad</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map((row) => (
                <tr
                  key={row.date}
                  className={`border-t transition ${
                    row.date.includes(String(currentDay)) ? "bg-yellow-50 font-bold" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="py-4 font-medium text-gray-800">
                    {row.date} {row.date.includes(String(currentDay)) && "Today"}
                  </td>
                  <td className="py-4 text-3xl font-extrabold text-green-600 border-l">
                    {row.ds}
                  </td>
                  <td className="py-4 text-3xl font-extrabold text-green-600 border-l">
                    {row.gl}
                  </td>
                  <td className="py-4 text-3xl font-extrabold text-green-600 border-l">
                    {row.fb}
                  </td>
                  <td className="py-4 text-3xl font-extrabold text-green-600 border-l">
                    {row.gz}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;