// src/pages/Beginner.tsx
import React from 'react';

import RightSide from './rightSide';
import RealExample from './realexample'; // Assuming this is the correct path to your realExample component
const Beginner: React.FC = () => {

    return (
        <>
        <section className="px-6 py-12">
           <div className="w-full flex justify-center">
  <div className="relative mt-5  w-full max-w-7xl h-[400px] rounded-3xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src="https://i0.wp.com/picjumbo.com/wp-content/uploads/3d-liquid-abstract-splash-background-free-image.jpeg?w=2210&quality=70"
      alt=""
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center">
        Beginner Topics in Stock Market
      </h1>
    </div>
  </div>
</div>


            <RightSide
                image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
                title='What is a Stock?'
                content="Imagine a stock is like a small piece of a big company, just like a slice of pizza! When you own a stock, you own a little part of the company. If the company does well and earns money, you can earn a little too! It’s like sharing the pizza with everyone – when the pizza gets bigger, everyone gets a bigger slice! But if the company doesn’t do well, your slice might get smaller. So, owning a stock is like being part of a team that wants to make the company better and bigger!"
            />

            <RealExample
                et="Real-Life Example:"
                ec="Let’s say there’s a company called Apple, which makes iPhones and other cool gadgets. If you own stock in Apple, you own a tiny piece of that company! If Apple makes a lot of iPhones and earns money, your piece of the company (your stock) can become more valuable!"
            />


            <RightSide
                image="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="Why Do People Buy Stocks?"
                content="People buy stocks because they hope the company will do well and the stock will become more valuable. It’s like buying a toy today, hoping it will be worth more money in the future!

For example, if you buy stock in a toy company and it becomes popular, the stock becomes more valuable. You can then sell it to someone else for more money!"
            />

            <RealExample
            et="Real-Life Example:"
            ec="Imagine a video game company like Nintendo. If Nintendo makes a popular game like Super Mario and millions of people buy it, the company makes more money. If you bought stock in Nintendo before the game came out, the stock might become more valuable because the company is doing well!"
            />

            <RightSide
            image='https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600'
            title='What Happens When You Own a Stock?'
            content="When you own a stock, you are like a little owner of that company. If the company makes money, it might share some of that money with you in the form of something called a dividend. Imagine your toy company gives you a small toy every month because you helped them by owning a part of their company!

But if the company doesn’t do well, the stock might lose value, just like if the toy store doesn't sell enough toys and becomes less popular."
            />

            <RealExample
            et="Real-Life Example:"
            ec="Let’s say you own stock in a candy company called Hershey’s. If Hershey’s sells a lot of candy during Halloween, the company will make money, and they may share some of that money with you by paying you dividends. If the company doesn’t sell enough candy, the stock might not be worth as much."
            />

            <RightSide
            image="https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&w=600"
            title='How Do Stock Prices Change?'
            content='Stock prices can go up and down. Imagine if a toy you have becomes super popular, lots of people will want to buy it, and the price will go up!But if no one wants the toy, the price will go down.

The same happens with stocks. If lots of people want to buy a stock because they think the company is great, the price goes up. If people think the company is not doing well, the price goes down.'

            />

            <RealExample
            et="Real-Life Example:"
            ec="Think about Tesla – the company that makes electric cars. When people believe that Tesla will make great cars, more people want to buy stock in Tesla. So, the stock price goes up!But, if people think that Tesla’s new car model isn’t as good, the stock price might drop."
            />
            
            <RightSide 
            image="https://images.pexels.com/photos/6801639/pexels-photo-6801639.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="What is a Capital Gain? "
            content="If you buy a stock for a small price, and then the price goes up, you can sell it for more money! This is called a capital gain. It’s like buying a toy for $10 and later selling it for $15 because it became very popular. You made a profit of $5!"
            />

            <RealExample
            et="Real-Life Example:"
            ec="Let’s say you bought stock in Amazon when it was only $50 per stock. After a few years, Amazon becomes really successful because more people are shopping online, and the stock price goes up to $200. If you sell your Amazon stock for $200, you made a capital gain of $150!"
            
            />

            <RightSide 
            image='https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600' 
            title='How to Start with Stocks' 
            content='1. Ask an Adult for Help: You need an adult, like a parent or guardian, to help you buy stocks. You can’t buy stocks all by yourself yet!

2. Pick a Company You Like: Think about companies that make products you like. Do you love a particular game, toy, or show? You can buy stock in the companies that make those things!

3.Watch Your Stock Grow: Over time, the value of your stock might go up or down. It’s fun to check how your stocks are doing and see if they are growing!

'/>
<RealExample
et="Real-Life Example: "
ec="If you like the Disney movies, you could buy stock in Disney. When Disney releases a popular movie like Frozen 2, more people might want to watch the movie, and Disney makes more money. Your stock in Disney could become more valuable!"
/></section>
        </>
    );
};

export default Beginner;
