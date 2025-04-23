import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';

interface Company {
  name: string;
  code: string;
  currentPrice: number;
  change: number;
  percentChange: number;
}

interface ChartPoint {
  time: string;
  price: number;
}

const generateChartData = (base: number): ChartPoint[] =>
  Array.from({ length: 30 }, (_, i) => ({
    time: `${i + 1}m`,
    price: base + Math.sin(i / 5) * 3 + Math.random() * 1.5,
  }));

const StockDashboard: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get<Company[]>('http://localhost:5000/api/companies');
        setCompanies(res.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <div className="w-full ml-9 flex  items-start mt-8">
      <div className="w-full max-w-2xl text-white">
        <div className="relative">
          <input
            type="text"
            placeholder="Search company (e.g. AAPL, Apple)"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && (
            <ul className="absolute z-10 bg-gray-700 w-full mt-1 rounded shadow max-h-60 overflow-y-auto">
              {(searchTerm ? filteredCompanies : companies).map((company) => (
                <li
                  key={company.code}
                  onClick={() => handleCompanySelect(company)}
                  className="p-2 hover:bg-gray-600 cursor-pointer transition"
                >
                  {company.code} - {company.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedCompany && (
          <div className="mt-6">
            <StockCard
              company={selectedCompany}
              chartData={generateChartData(selectedCompany.currentPrice)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StockDashboard;
