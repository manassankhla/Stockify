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
                <div className="relative mt-15 w-full max-w-7xl h-[400px] rounded-3xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://as2.ftcdn.net/v2/jpg/07/01/59/41/1000_F_701594123_uhCR07RURU93aOpPGI3BPONwq28uioGr.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center">
                            Advance Topics in Stock Market
                        </h1>
                    </div>
                </div>
            </div>

            <LeftSide
                image='https://images.pexels.com/photos/904735/pexels-photo-904735.jpeg?auto=compress&cs=tinysrgb&w=600'
                title='1. Options & Derivatives Trading'
                content={
                    <>
                        Options aren't gambling tools — they're precision instruments. You’ll learn:
                        <br /><br />
                        <ul className="list-disc list-inside mt-2">
                            <li>What are Options (Calls & Puts) and how to use them for hedging or profit</li>
                            <li>Strategies: Iron Condor, Straddle, Covered Calls, Protective Puts</li>
                            <li>Understand Greeks: Delta, Theta, Vega — to measure sensitivity of options</li>
                            <li>Risks involved and how to manage leverage smartly</li>
                        </ul>
                    </>
                }

                to='https://zerodha.com/varsity/module/option-theory/'
            />

            <RightSide
                image='https://images.pexels.com/photos/6801639/pexels-photo-6801639.jpeg?auto=compress&cs=tinysrgb&w=600'
                title='2. Technical + Quantitative Analysis'
                content={<>
                    Beyond candlesticks and support/resistance — this is where precision comes in.
                    <br /><br />
                    <ul className="list-disc list-inside mt-2">
                        <li>Chart patterns with advanced indicators: RSI, MACD, Bollinger Bands</li>
                        <li>Quantitative analysis using statistics and backtesting strategies</li>
                        <li>Build your own trading signals using Python (or tools like TradingView Pine Script)</li>
                    </ul>
                </>}
                to='https://www.investopedia.com/terms/t/technicalanalysis.asp'
            />

            <LeftSide
                image='https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600'
                title='3. Macro Economics & Global Market Correlation'
                content={<>
                    Markets don’t live in a bubble — they move with global forces.
                    <br /><br />
                    <ul className="list-disc list-inside mt-2">
                        <li>Understand interest rates, inflation, monetary policy, GDP, FII/DII flow</li>
                        <li>How global markets (US Fed, crude oil, bonds) impact Indian stock market</li>
                        <li>Develop macro thesis to position your portfolio</li>
                    </ul>
                </>}
                to='https://www.youtube.com/watch?v=PHe0bXAIuk0'
            />

            <RightSide
                image='https://images.pexels.com/photos/7947716/pexels-photo-7947716.jpeg?auto=compress&cs=tinysrgb&w=600'
                title='4. Portfolio Management & Risk Control'
                content={<>
                    It's not about how much you make — it's about how well you protect it.
                    <br /><br />
                    <ul className="list-disc list-inside mt-2">
                        <li>Learn Asset Allocation (Equity, Debt, Gold, REITs)</li>
                        <li>Diversification vs. Concentration</li>
                        <li>Tools like Sharpe Ratio, Beta, Standard Deviation</li>
                        <li>Rebalancing strategies quarterly/yearly</li>
                    </ul>
                </>}
                to='https://www.investopedia.com/terms/m/morningstarriskrating.asp#:~:text=The%20Morningstar%20risk%20rating%20is,compared%20to%20other%20like%20funds.'
            />

            <LeftSide
                image='https://images.pexels.com/photos/7172825/pexels-photo-7172825.jpeg?auto=compress&cs=tinysrgb&w=600'
                title='5. Psychology of Trading & Investing'
                content={<>
                    Warren Buffett once said: "The biggest enemy of the investor is themselves."
                    <br /><br />
                    <ul className="list-disc list-inside mt-2">
                        <li>Master emotions: Fear, Greed, FOMO, Overconfidence</li>
                        <li>Build discipline through journaling trades, following rules, sticking to process</li>
                        <li>Learn from greats: Mark Douglas, Howard Marks, Benjamin Graham</li>
                    </ul>
                </>}
                to='https://www.simplertrading.com/blog/mastering-the-market-mindset-trading-psychology-through-the-eyes-of-mark-douglas'
            />

            <RightSide
                image='https://images.pexels.com/photos/21300483/pexels-photo-21300483/free-photo-of-indian-coins-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600'
                title='6. Algo & Automation for Smart Investing'
                content={<> Why work hard when your bot can do it?
                    <br /><br />
                    <ul className="list-disc list-inside mt-2">
                        <li>Build bots using Python + Alpaca API / Zerodha Kite</li>
                        <li>Backtest and deploy strategies with libraries like backtrader or QuantConnect</li>
                        <li>Use No-code algo platforms like Streak for fast deployment</li>
                    </ul>
                </>}
                to='https://youtu.be/tFcIam0P86Y'
            />

        </>
    );
};

export default Beginner;
