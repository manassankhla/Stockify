// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import firstpage from '../assets/firstpage.jpeg';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center px-6 overflow-hidden"
    style={{
      backgroundImage: `url(${firstpage})`,
    }}>
      
      {/* 🔥 Animated Stock Line Graph Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
        viewBox="20 0 700 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="20%" stopColor="#bc440b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q200,100 400,150 T800,50"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="4"
        >
          <animate
            attributeName="d"
            values="
              M0,200 Q200,100 400,150 T800,50;
              M0,180 Q200,120 400,130 T800,70;
              M0,200 Q200,100 400,150 T800,50"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* 🔥 Main Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl md:text-7xl font-extrabold text-center text-slate-900"  
      >
        Welcome to Stockify
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 text-lg md:text-xl text-slate-900 mt-6 max-w-2xl text-center"
      >
        Learn Stock Market in the most simple way — <span className="text-orange-700 font-semibold">even a 5-year-old can understand</span>. From absolute beginner to stock market pro.
      </motion.p>

      <motion.button
        onClick={() => navigate('/signin')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 mt-10 bg-slate-900 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer"
      >
        Start Learning Now
      </motion.button>

      
    </main>
  );
};

export default HomePage;
