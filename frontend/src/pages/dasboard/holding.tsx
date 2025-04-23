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
  const [selectedHolding, setSelectedHolding] = useState<HoldingType | null>(null);
  const [sellQuantity, setSellQuantity] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleSell = async () => {
    if (!selectedHolding) return;
    const qty = parseInt(sellQuantity);

    if (isNaN(qty) || qty <= 0 || qty > selectedHolding.quantity) {
      setErrorMsg(`Enter a valid quantity (1 - ${selectedHolding.quantity})`);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      console.log("Selling:", { stockId: selectedHolding.companyId, quantity: qty });  // Debugging log
      const res = await axios.post(
        "http://localhost:5000/api/stock/sell",
        { stockId: selectedHolding.companyId, quantity: qty }, // Corrected line here
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(res.data.message || "Stock sold successfully!");

      setHoldings((prev) =>
        prev
          .map((h) =>
            h.companyId === selectedHolding.companyId
              ? {
                  ...h,
                  quantity: h.quantity - qty,
                  totalValue: ((h.quantity - qty) * h.currentPrice).toFixed(2),
                }
              : h
          )
          .filter((h) => h.quantity > 0)
      );

      setSelectedHolding(null);
      setSellQuantity('');
      setErrorMsg('');
    } catch (err: any) {
      const msg = err.response?.data?.message || "Sell failed.";
      setErrorMsg(msg);
      alert(msg);
    }
  };

  if (loading) return <p className="p-4">Loading holdings...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Holdings</h2>

      {holdings.length === 0 ? (
        <p>No holdings available.</p>
      ) : (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 text-left">Company</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Avg</th>
              <th className="p-2">Current</th>
              <th className="p-2">Value</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h) => (
              <tr key={h._id} className="border-t">
                <td className="p-2">
                  {h.companyName} <span className="text-gray-500">({h.companyCode})</span>
                </td>
                <td className="p-2 text-center">{h.quantity}</td>
                <td className="p-2 text-center">₹{h.avgPrice.toFixed(2)}</td>
                <td className="p-2 text-center">₹{h.currentPrice.toFixed(2)}</td>
                <td className="p-2 text-center">₹{h.totalValue}</td>
                <td className="p-2 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => {
                      setSelectedHolding(h);
                      setSellQuantity('');
                      setErrorMsg('');
                    }}
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Sell Modal */}
      {selectedHolding && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] p-6 rounded-lg w-11/12 sm:w-1/2 text-white">
            <h3 className="text-xl font-bold mb-2">{selectedHolding.companyName}</h3>
            <p className="text-gray-400 mb-4">Code: {selectedHolding.companyCode}</p>
            <p className="text-lg mb-2">Current Price: ₹{selectedHolding.currentPrice.toFixed(2)}</p>

            <input
              type="number"
              placeholder={`Quantity (Max: ${selectedHolding.quantity})`}
              value={sellQuantity}
              onChange={(e) => setSellQuantity(e.target.value)}
              className="w-full p-2 mb-3 bg-[#121212] border border-gray-600 rounded text-white"
            />

            {sellQuantity && parseInt(sellQuantity) > 0 && (
              <p className="text-sm mb-2 text-gray-300">
                Total: ₹{(parseInt(sellQuantity) * selectedHolding.currentPrice).toFixed(2)}
              </p>
            )}

            {errorMsg && <p className="text-red-500 text-sm mb-3">{errorMsg}</p>}

            <div className="flex gap-4">
              <button
                onClick={handleSell}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full"
              >
                Confirm Sell
              </button>
              <button
                onClick={() => setSelectedHolding(null)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Holdings;
