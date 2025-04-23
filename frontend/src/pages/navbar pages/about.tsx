import React from "react";

const About = () => {
  return (
    <div className="min-h-screen mt-10 bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">About Stockify</h1>
        <p className="text-lg text-gray-300 mb-4">
          Stockify is your modern stock trading dashboard, crafted for a seamless and insightful investing experience.
          We combine real-time market data, intuitive UI, and essential portfolio tracking tools all in one place.
        </p>
        <p className="text-md text-gray-400">
          Our mission is to empower users to take full control of their investments with clarity, speed, and confidence.
          Whether you're a casual investor or a seasoned trader, Stockify is built to scale with your goals.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Built With ❤️ Using</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>React + TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Express & MongoDB (Backend)</li>
            <li>Live stock data APIs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
