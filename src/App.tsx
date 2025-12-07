// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminForm from "./AdminForm";
import RegionalDrawResults from "./RegionalDrawResults";

const LoadingScreen = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="text-black text-3xl font-bold mb-4">Loading Satta Results...</div>
      <div className="text-gray-600">Fast • Accurate • Simple</div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Simple Header */}
        <header className="border-b border-gray-300 py-4 text-center bg-gray-50">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
            <Link to="/" className="text-2xl font-bold text-green-600">
              SATTA KING GOLD
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-1">Live Fast Results - Desawar • Gali • Faridabad • Ghaziabad</p>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/admin" element={<AdminForm />} />
          </Routes>
        </main>

        {/* Simple Footer */}
        <footer className="bg-gray-50 border-t border-gray-300 py-4 text-center text-gray-600 text-sm mt-12">
          <p>Disclaimer: For entertainment only. 18+ Gambling illegal in many regions.</p>
          <p className="mt-1">© 2025 Satta King Gold • All Rights Reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

const HomeContent = () => (
  <div>
    {/* Welcome Section - Simple */}
    <section className="text-center mb-8 border-b border-gray-300 pb-6">
      <h2 className="text-2xl font-bold text-black mb-2">Welcome to Satta King Gold 2025</h2>
      <p className="text-gray-600 mb-4">Get the fastest live results for all major markets. Play smart, stay updated.</p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600">
        <a href="#" className="hover:underline">Satta King</a> •
        <a href="#" className="hover:underline">Black Satta</a> •
        <a href="#" className="hover:underline">Satta Chart</a> •
        <a href="#" className="hover:underline">Monthly Record</a>
      </div>
    </section>

    {/* Live Results */}
    <section className="mb-8">
      <h2 className="text-xl font-bold text-black mb-4 text-center">Today's Live Satta Results</h2>
      <RegionalDrawResults />
    </section>

    {/* Charts Section - Simple Table */}
    <section className="mb-8">
      <h3 className="text-xl font-bold text-black mb-4 text-center">Monthly Charts & Records</h3>
      <div className="overflow-x-auto border border-gray-300 rounded">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-bold">Date</th>
              <th className="px-4 py-2 text-center font-bold border-l border-gray-300">Desawar</th>
              <th className="px-4 py-2 text-center font-bold border-l border-gray-300">Gali</th>
              <th className="px-4 py-2 text-center font-bold border-l border-gray-300">Faridabad</th>
              <th className="px-4 py-2 text-center font-bold border-l border-gray-300">Ghaziabad</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "04 Dec", ds: "27", gl: "31", fb: "47", gz: "11" },
              { date: "03 Dec", ds: "84", gl: "28", fb: "XX", gz: "44" },
              { date: "02 Dec", ds: "20", gl: "XX", fb: "83", gz: "90" },
              { date: "01 Dec", ds: "12", gl: "33", fb: "80", gz: "12" },
            ].map((row, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{row.date}</td>
                <td className="px-4 py-3 text-center text-2xl font-bold text-green-600 border-l border-gray-200">
                  {row.ds}
                </td>
                <td className="px-4 py-3 text-center text-2xl font-bold text-green-600 border-l border-gray-200">
                  {row.gl}
                </td>
                <td className="px-4 py-3 text-center text-2xl font-bold text-green-600 border-l border-gray-200">
                  {row.fb}
                </td>
                <td className="px-4 py-3 text-center text-2xl font-bold text-green-600 border-l border-gray-200">
                  {row.gz}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default App;