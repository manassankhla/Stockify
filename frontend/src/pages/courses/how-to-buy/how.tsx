import React from 'react';
import { Link } from 'react-router-dom';

const HowToBuyStock = () => {
  return (
    <section className="px-6 py-12 mt-5 max-w-5xl mx-auto text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">How to Buy a Stock</h1>

      <p className="text-lg mb-4">
        Investing in stocks may sound complex, but with the right steps, it’s super easy to get started! Here’s a simple breakdown:
      </p>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold">1. Open a Demat & Trading Account</h2>
          <p className="mt-2 text-base">
            To buy or sell stocks, you need two accounts: <br />
            <strong>Demat Account</strong> – holds your shares electronically<br />
            <strong>Trading Account</strong> – used to place buy/sell orders<br />
            Popular brokers:
          </p>
          <ul className="list-disc list-inside mt-2 text-blue-600">
            <li>
              <Link to="https://zerodha.com/open-account" target="_blank" rel="noopener noreferrer">
                Zerodha – Open Account
              </Link>
            </li>
            <li>
              <Link to="https://groww.in/open-demat-account" target="_blank" rel="noopener noreferrer">
                Groww – Open Demat Account
              </Link>
            </li>
            <li>
              <Link to="https://upstox.com/open-demat-account" target="_blank" rel="noopener noreferrer">
                Upstox – Open Demat Account
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">2. Complete KYC</h2>
          <p className="mt-2">
            You’ll need: PAN, Aadhaar, a selfie, and bank details. Most brokers finish KYC online in 10–15 minutes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">3. Add Funds</h2>
          <p className="mt-2">Transfer money to your trading account using UPI, NetBanking, etc.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">4. Search & Select the Stock</h2>
          <p className="mt-2">
            Type the stock name (e.g., TCS, Infosys). Check price, charts, and company details before buying.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">5. Place Your Order</h2>
          <p className="mt-2">
            Choose order type:
            <br /><strong>Market Order</strong> – Buy at current price
            <br /><strong>Limit Order</strong> – Buy at a price you set
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">6. Done!</h2>
          <p className="mt-2">You now own the stock. Track it in your app or dashboard.</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Tips Before You Buy</h3>
          <ul className="list-disc list-inside">
            <li>Don’t blindly follow the crowd</li>
            <li>Research before buying</li>
            <li>Diversify your investment</li>
            <li>Start small, grow gradually</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HowToBuyStock;
