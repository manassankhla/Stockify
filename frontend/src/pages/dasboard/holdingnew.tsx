import React, { useEffect, useState } from "react";
import axios from "axios";

type HoldingType = {
  _id: string;
  companyName: string;
  companyCode: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  totalValue: string;
  companyId: string;
};

const Holdings = () => {
  const [holdings, setHoldings] = useState<HoldingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 15;

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/holdings", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const formattedHoldings = res.data.data.map((h: any) => ({
          ...h,
          totalValue: (h.quantity * h.currentPrice).toFixed(2),
        }));

        setHoldings(formattedHoldings);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const totalPages = Math.ceil(holdings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHoldings = holdings.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  if (loading) {
    return <p className="p-6 text-white">Loading holdings...</p>;
  }

  return (
    <div className="p-6 w-full mt-10 bg-zinc-950">
    <div className="p-6 bg-[#121212] text-white rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Holdings</h2>

      {holdings.length === 0 ? (
        <p className="text-gray-300">No holdings available.</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#2a2a2a] text-white uppercase text-xs">
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-center">Avg Price</th>
                  <th className="p-3 text-center">Current Price</th>
                  <th className="p-3 text-center">Total Value</th>
                </tr>
              </thead>
              <tbody>
                {currentHoldings.map((h) => (
                  <tr
                    key={h._id}
                    className="border-t border-gray-700 hover:bg-[#2f2f2f] transition"
                  >
                    <td className="p-3">
                      <span className="font-medium">{h.companyName}</span>{" "}
                      <span className="text-gray-400 text-xs">({h.companyCode})</span>
                    </td>
                    <td className="p-3 text-center">{h.quantity}</td>
                    <td className="p-3 text-center">₹ {h.avgPrice.toFixed(2)}</td>
                    <td className="p-3 text-center">₹ {h.currentPrice.toFixed(2)}</td>
                    <td className="p-3 text-center font-semibold text-green-400">
                      ₹ {h.totalValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-600 rounded hover:bg-gray-700 disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 text-sm rounded border border-gray-600 ${
                  currentPage === i + 1
                    ? "bg-white text-black font-semibold"
                    : "hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-600 rounded hover:bg-gray-700 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
    </div>);
};

export default Holdings;
