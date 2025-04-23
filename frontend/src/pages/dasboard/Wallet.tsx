import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wallet2, X } from 'lucide-react';

const Wallet: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<string>(''); // Amount input
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(''); // Message to show success or error

  const token = localStorage.getItem('token'); // Getting token from localStorage

  // Function to fetch balance
  const fetchBalance = async () => {
    if (!token) return;

    try {
      const res = await axios.get('http://localhost:5000/api/wallet', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBalance(res.data.balance || 0); // Update state with the fetched balance
    } catch (err) {
      console.error('Error fetching balance:', err);
      setMessage('Failed to fetch balance');
    }
  };

  // Fetch balance on initial load
  useEffect(() => {
    if (token) fetchBalance();
  }, [token]);

  // Handle adding funds
  const handleAddFunds = async () => {
    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || parsedAmount <= 0) {
      setMessage('Please enter a valid amount');
      return;
    }

    setLoading(true);

    try {
      // Optimistic UI update: Update balance right away
      setBalance((prevBalance) => prevBalance + parsedAmount);

      // Request to add funds to the wallet
      const res = await axios.post(
        'http://localhost:5000/api/wallet',
        { amount: parsedAmount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(`₹${parsedAmount} added successfully!`);
      setAmount(''); // Reset input field

      setTimeout(() => {
        setShowModal(false); // Close the modal after success
        setMessage(''); // Reset the message
      }, 1500);

      // Re-fetch balance after successful addition to confirm
      await fetchBalance();
    } catch (err) {
      // Handle errors by reverting optimistic balance update
      setBalance((prevBalance) => prevBalance - parsedAmount);
      if ((err as any).response) {
        setMessage(`Error: ${(err as any).response.data.message || 'Failed to add funds'}`);
      } else if ((err as any).request) {
        setMessage('Network Error: Failed to reach the server');
      } else {
        setMessage('Error: Failed to add funds');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle buying stock
  const handleBuyStock = async (stockPrice: number) => {
    if (balance < stockPrice) {
      setMessage('Insufficient funds');
      return;
    }

    setLoading(true);

    try {
      // Optimistic UI update: Decrease balance immediately
      setBalance((prevBalance) => prevBalance - stockPrice);

      // Request to buy stock
      const res = await axios.post(
        'http://localhost:5000/api/buy-stock',
        { stockPrice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(`Stock purchased for ₹${stockPrice} successfully!`);

      // Re-fetch balance after the purchase to confirm
      await fetchBalance();
    } catch (err) {
      // Revert balance if error occurs
      setBalance((prevBalance) => prevBalance + stockPrice);
      if ((err as any).response) {
        setMessage(`Error: ${(err as any).response.data.message || 'Failed to purchase stock'}`);
      } else if ((err as any).request) {
        setMessage('Network Error: Failed to reach the server');
      } else {
        setMessage('Error: Failed to purchase stock');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Wallet Button */}
      <div
        className="fixed top-17 right-4 z-50 bg-[#1f1f1f] hover:bg-[#2a2a2a] cursor-pointer text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md"
        onClick={() => setShowModal(true)}
      >
        <Wallet2 size={20} />
        <span>₹{balance.toFixed(2)}</span>
      </div>

      {/* Modal for Adding Funds */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1f1f1f] p-6 rounded-xl w-[90%] sm:w-[400px] text-white relative">
            <button
              className="absolute top-3 right-3 text-white"
              onClick={() => {
                setShowModal(false);
                setMessage('');
                setAmount('');
              }}
            >
              <X size={22} />
            </button>

            <h2 className="text-xl font-semibold mb-1 text-center">Add Funds to Wallet</h2>
            <p className="text-center mb-4 text-sm text-gray-400">Current Balance: ₹{balance.toFixed(2)}</p>


            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 rounded-md bg-[#2a2a2a] text-white mb-4"
            />

            <div className="flex gap-2">
              <button
                className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-md"
                onClick={handleAddFunds}
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Funds'}
              </button>

              <button
                className="w-full bg-gray-600 hover:bg-gray-700 py-2 rounded-md"
                onClick={() => {
                  setShowModal(false);
                  setMessage('');
                  setAmount('');
                }}
              >
                Cancel
              </button>
            </div>

            {message && (
              <p className="mt-4 text-sm text-yellow-400 text-center">{message}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Wallet;
