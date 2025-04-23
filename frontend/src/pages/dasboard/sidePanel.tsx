import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface Company {
  _id: string;
  name: string;
  code: string;
  percentChange: number;
  currentPrice: number;
}

const SidePanel = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [quantity, setQuantity] = useState<string>(''); // Quantity as string for better control
  const companiesPerPage = 5;

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/companies', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCompanies(res.data);
      } catch (err) {
        console.error('Failed to fetch companies:', err);
      }
    };

    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);
  const indexOfLast = currentPage * companiesPerPage;
  const indexOfFirst = indexOfLast - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleTransaction = async (type: 'buy' | 'sell') => {
    const qty = parseInt(quantity);
    if (!selectedCompany || isNaN(qty) || qty <= 0) return;

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `http://localhost:5000/api/stock/${type}`,
        {
          stockId: selectedCompany._id,
          quantity: qty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.message) {
        alert(res.data.message);
      }

      setSelectedCompany(null);
      setQuantity('');
    } catch (err) {
      console.error(`Failed to ${type} stock:`, err);
      alert(`Failed to ${type} stock`);
    }
  };

  return (
    <div className="w-[600px] p-4 bg-[#121212] text-white h-screen overflow-y-auto shadow-xl">
      {/* Search Bar */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search company..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-2 pl-10 bg-[#1f1f1f] border border-gray-700 rounded-lg text-white focus:outline-none"
        />
        <Search className="absolute top-2.5 left-3 text-gray-400" size={20} />
      </div>

      {/* Company List */}
      {currentCompanies.map((company) => (
        <div
          onClick={() => {
            setSelectedCompany(company);
            setQuantity('');
          }}
          key={company._id}
          className="bg-[#1f1f1f] p-4 rounded-lg mb-3 hover:bg-[#2a2a2a] transition duration-200 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{company.name}</h2>
              <p className="text-xs text-gray-400">{company.code}</p>
              <p className={`text-sm font-medium ${company.percentChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {company.percentChange >= 0 ? '+' : ''}{company.percentChange}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">₹{company.currentPrice}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-500' : 'hover:bg-[#2a2a2a]'}`}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm text-gray-400">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-500' : 'hover:bg-[#2a2a2a]'}`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1f1f1f] p-6 rounded-lg w-11/12 sm:w-1/2 text-white">
            <h2 className="text-xl font-bold mb-2">{selectedCompany.name}</h2>
            <p className="text-gray-400 mb-4">Code: {selectedCompany.code}</p>
            <p className="text-lg font-semibold mb-2">Current Price: ₹{selectedCompany.currentPrice}</p>

            <input
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full mb-2 p-2 bg-[#121212] border border-gray-600 rounded text-white"
              min={1}
            />

            {/* Total Calculation */}
            {quantity && !isNaN(parseInt(quantity)) && parseInt(quantity) > 0 && (
              <p className="text-sm mb-4 text-gray-300">
                Total: ₹{parseInt(quantity) * selectedCompany.currentPrice}
              </p>
            )}

            <div className="flex justify-between gap-4">
              <button
                onClick={() => handleTransaction('buy')}
                disabled={!quantity || parseInt(quantity) <= 0}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full disabled:opacity-50"
              >
                Buy
              </button>

              <button
                onClick={() => handleTransaction('sell')}
                disabled={!quantity || parseInt(quantity) <= 0}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full disabled:opacity-50"
              >
                Sell
              </button>
            </div>

            <button
              onClick={() => {
                setSelectedCompany(null);
                setQuantity('');
              }}
              className="mt-4 text-sm text-gray-400 hover:text-white underline w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
