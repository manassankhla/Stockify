import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  company: {
    name: string;
    code: string;
    currentPrice: number;
    change: number;
    percentChange: number;
  };
  chartData: { time: string; price: number }[];
}

const StockCard: React.FC<Props> = ({ company, chartData }) => {
  const isPositive = company.change >= 0;
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-gray-950 text-white p-6 rounded-2xl shadow-xl border border-gray-800 w-full max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{company.code}</h2>
          <p className="text-sm text-gray-400">{company.name}</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-semibold">₹{company.currentPrice.toFixed(2)}</h2>
          <p className={`${changeColor} text-sm`}>
            {company.change >= 0 ? '+' : ''}
            {company.change.toFixed(2)} ({company.percentChange.toFixed(2)}%)
          </p>
        </div>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" hide />
            <YAxis domain={['dataMin', 'dataMax']} hide />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Line type="monotone" dataKey="price" stroke="#00D9FF" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockCard;
