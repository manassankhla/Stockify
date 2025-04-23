// src/pages/Beginner.tsx
import React from 'react';
import RightSide from './rightSide';
import LeftSide from './leftSide';
// import RightSide from './rightSide';
// import RealExample from './realexample'; // Assuming this is the correct path to your realExample component
const Beginner: React.FC = () => {

    return (
        <>
           <div className="w-full mt-5 flex justify-center">
  <div className="relative w-full mt-15 max-w-7xl h-[400px] rounded-3xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src="https://i0.wp.com/picjumbo.com/wp-content/uploads/3d-polygon-abstract-background-free-photo.jpeg?w=2210&quality=70"
      alt=""
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center">
        Intermediate Topics in Stock Market
      </h1>
    </div>
  </div>
</div>

<LeftSide 
image= "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=600"
title="1. Fundamental Analysis"
content={
  <>It’s not just about price anymore — it’s about value. <br/>
Here, you’ll learn how to judge a company’s health by looking at their Balance Sheet, Income Statement, and Cash Flow.<br/>
Metrics like P/E Ratio, EPS, and ROE help you decide whether the stock is undervalued or overpriced.</>
}
to="https://www.investopedia.com/fundamental-analysis-4689757"
/>

<RightSide
image= "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=600"
title="2. Technical Analysis"
content={<>
This is where the charts speak.<br/>
You'll dive into candlestick patterns, support and resistance, and technical indicators like RSI, MACD, and Bollinger Bands.<br/> Perfect for identifying the right entry and exit points.
</>}
to="https://www.investopedia.com/terms/t/technicalanalysis.asp"
/>

<LeftSide
image="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600"
title="3. Investor Psychology"
content={<>The biggest enemy in trading? Your own emotions.<br/>
Understanding fear, greed, FOMO, and herd mentality can save you from making poor decisions.<br/> Learn how to stay calm in both bull and bear markets.</>}
to="https://www.investopedia.com/terms/b/behavioralfinance.asp"
/>

<RightSide
image="https://images.pexels.com/photos/5561923/pexels-photo-5561923.jpeg?auto=compress&cs=tinysrgb&w=600"
title="4. Portfolio Diversification"
content={<>Don’t put all your eggs in one basket.<br/>
Spread your investments across various sectors and asset types — large-cap, mid-cap, small-cap, and even debt instruments.<br/> It’s the best way to reduce risk and protect your capital.</>}
to="https://www.investopedia.com/terms/d/diversification.asp"
/>

<LeftSide
image="https://images.pexels.com/photos/6781273/pexels-photo-6781273.jpeg?auto=compress&cs=tinysrgb&w=600"
title="5. Types of Market Orders"
content={<>Knowing how to place your order matters.<br/>
Use a Market Order for quick trades, Limit Order to set your own price, and Stop Loss or GTT orders to automatically protect yourself from big losses.</>}
to="https://www.investopedia.com/ask/answers/100314/whats-difference-between-market-order-and-limit-order.asp"
/>

<RightSide
image="https://images.pexels.com/photos/6781273/pexels-photo-6781273.jpeg?auto=compress&cs=tinysrgb&w=600"
title="6. Market Cycles & Sector Rotation"
content={<>Stock markets go through cycles — expansion, peak, contraction, and recovery.<br/> Knowing where the economy stands can help you pick the right sectors at the right time.</>}
to="https://www.investopedia.com/terms/m/market_cycles.asp"
/>

<LeftSide
image="https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=600"
title="7. Global & Economic Indicators"
content={<>The stock market doesn’t exist in a bubble.<br/>
Global events, inflation, interest rates, GDP numbers, oil prices — everything can affect the market.<br/> Stay informed, because smart investing is also about staying aware.</>}
to="https://www.investopedia.com/terms/e/economic_indicator.asp"
/>

<RightSide
image="https://images.pexels.com/photos/8353793/pexels-photo-8353793.jpeg?auto=compress&cs=tinysrgb&w=600"
title="8. Introduction to Futures & Options"
content={<>F&O is like the turbo mode of trading.<br/>
Learn how call and put options work, how futures contracts can lock in prices, and how traders use them for hedging or speculation.<br/> Start small — the potential is big, but so is the risk.</>}
to="https://www.investopedia.com/ask/answers/difference-between-options-and-futures/#:~:text=An%20option%20gives%20the%20buyer,at%20a%20specific%20future%20date."
/>

</>
    );
};

export default Beginner;
