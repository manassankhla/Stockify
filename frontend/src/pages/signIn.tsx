import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import videobg from '../assets/bg.mp4'; // Ensure the path is correct
interface SignInProps {
  onSignInSuccess: (token: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignInSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('isLoggedIn', 'true');
      onSignInSuccess(token);
      navigate('/choice');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videobg} type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0" />

      {/* ✨ Sign-in Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-20 bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <div className="text-center mt-4 text-sm text-gray-700">
          Don’t have an account yet?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
