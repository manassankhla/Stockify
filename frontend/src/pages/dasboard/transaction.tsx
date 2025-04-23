import React, { useEffect, useState } from "react";
import axios from "axios";

type Transaction = {
  type: "BUY" | "SELL" | "ADD_FUNDS";
  companyCode?: string;
  companyName?: string;
  quantity?: number;
  price?: number;
  total: number;
  date: string;
};

const TransactionPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 8;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(res.data);
      } catch (err) {
        console.error("Failed to fetch transactions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  // Pagination calculations
  const indexOfLast = currentPage * transactionsPerPage;
  const indexOfFirst = indexOfLast - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 w-full mt-10 bg-zinc-950">
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Transaction History
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400">No transactions found.</p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl shadow-md mb-4">
            <table className="min-w-full divide-y divide-gray-700 bg-[#1e1e1e] text-white">
              <thead className="bg-[#2a2a2a]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Price (₹)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Total (₹)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {currentTransactions.map((t, i) => (
                  <tr key={i} className="hover:bg-[#333] transition">
                    <td className="px-6 py-4 font-medium">
                      <span
                        className={`px-2 py-1 rounded text-sm font-semibold ${
                          t.type === "BUY"
                            ? "text-green-400 bg-green-800/30"
                            : t.type === "SELL"
                            ? "text-red-400 bg-red-800/30"
                            : "text-blue-400 bg-blue-800/30"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{t.companyName || "—"}</td>
                    <td className="px-6 py-4">{t.quantity ?? "—"}</td>
                    <td className="px-6 py-4">{t.price ? `₹${t.price}` : "—"}</td>
                    <td className="px-6 py-4 font-semibold text-yellow-400">
                      ₹{t.total}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(t.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
        {/* Pagination Controls */}
<div className="flex justify-center items-center gap-2 mt-4">
  <button
    onClick={() => goToPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-3 py-1 border text-white border-gray-500 rounded disabled:opacity-50"
  >
    Prev
  </button>

  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      onClick={() => goToPage(i + 1)}
      className={`px-3 py-1 border border-gray-500 rounded ${
        currentPage === i + 1 ? "bg-gray-300 text-black font-medium" : ""
      }`}
    >
      {i + 1}
    </button>
  ))}

  <button
    onClick={() => goToPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-3 py-1 text-white border border-gray-500 rounded disabled:opacity-50"
  >
    Next
  </button>
</div>

        </>
      )}
    </div>
  );
};

export default TransactionPage;
