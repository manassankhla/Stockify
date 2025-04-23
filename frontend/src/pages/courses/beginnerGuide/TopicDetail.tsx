// src/pages/TopicDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const contentMap: Record<string, { title: string; content: string }> = {
  'what-is-stock-market': {
    title: 'What is the Stock Market?',
    content: `The stock market is like a giant online bazaar — but instead of selling clothes, electronics, or food, people buy and sell ownership of companies in the form of shares or stocks.

🔍 What is a Stock?
A stock represents a small piece of ownership in a company. When you buy a stock, you own a tiny fraction of that business.

✅ Example:
Let’s say Tata Motors has 10 crore shares in total. If you own 1,000 shares, you own a 0.00001% stake in Tata Motors — this gives you the right to earn a part of the company’s profits (through dividends) and participate in its growth.

📍Why Does the Stock Market Exist?
Just like people borrow money from banks to buy houses or start a business, companies also need money to expand, launch new products, or open in new cities.
Instead of taking a loan (which they have to repay), they go public by listing themselves on the stock market and selling shares to regular people like us.

This is called an IPO (Initial Public Offering).

✅ Example:
When Zomato needed money to grow, it listed on the stock market and raised over ₹9,000 crore from investors.

🏢 Where Does This Happen?
In India, the two main stock exchanges are:

BSE – Bombay Stock Exchange

NSE – National Stock Exchange

Companies are listed on these platforms. When you trade stocks, you're essentially buying or selling them through these exchanges.

💻 How Do You Buy or Sell Stocks?
You can't directly walk into NSE and buy stocks. You need a:

Demat Account – Stores your stocks electronically (like a bank for stocks).

Trading Account – Used to buy/sell stocks.

Platforms like Zerodha, Upstox, Groww, Angel One etc. allow anyone with a smartphone to open these accounts and start investing.

✅ Example:
If you buy 10 shares of Reliance at ₹2,500 per share, your Demat account will reflect Reliance – 10 shares.

📈 Why Do Stock Prices Change?
Stock prices change every second because of demand and supply.

If more people want to buy a stock → Price goes up

If more people want to sell → Price goes down

✅ Example:
If Tata Steel announces strong profits, investors rush to buy its stock = price increases.
If there's a political crisis or bad financials, people start selling = price drops.

🎯 Why Should You Care?
Grow your wealth over time through investing

Beat inflation (money losing value over time)

Become financially independent

The stock market is one of the best tools to build long-term wealth — if you learn it properly and use it wisely.

🧠 Key Takeaways
A stock is a piece of a company.

The stock market is where buyers and sellers of these stocks meet.

You can invest using a Demat + Trading account.

Stock prices fluctuate based on news, company performance, and public sentiment.`
  },
  'why-do-companies-sell-shares': {
    title: 'Why Do Companies Sell Shares?',
    content: `Companies sell shares to raise money. For example, a company might want to expand or invest in new technology...`
  },
  'types-of-stocks': {
    title: 'Types of Stocks',
    content: `There are two main types of stocks: common and preferred. Common stocks give voting rights, preferred don't but may give dividends...`
  },
  'how-to-buy-stocks': {
    title: 'How Do You Buy Stocks?',
    content: `You can buy stocks through a stockbroker or using apps like Zerodha, Upstox, Groww, etc. You'll need a Demat account...`
  }
};

const TopicDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = contentMap[slug || ''];

  if (!topic) {
    return <div className="text-center text-white mt-10">Topic not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{topic.title}</h1>
      <p className="text-lg text-gray-300">{topic.content}</p>
    </div>
  );
};

export default TopicDetail;
