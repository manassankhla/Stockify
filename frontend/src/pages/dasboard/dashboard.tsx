import React, { useEffect, useState } from "react";
import {
  User,
  ChevronUp,
  ChevronDown,
  LogOut,
  FileText,
  Layers,
} from "lucide-react";
import SidePanel from "./sidePanel";
import Wallet from "./Wallet";
import Graph from "./graph";
import News from "./news";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (type: "HOLDING" | "TRANSACTION") => {
    if (type === "HOLDING") navigate("/holding");
    if (type === "TRANSACTION") navigate("/transaction");
    setDropdownOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = response.data.user || response.data;
        setUsername(user.username || user.name || "Unknown User");
      } catch (error) {
        console.error("❌ Failed to fetch user info", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col mt-10 bg-[#121212] text-white">
      <div className="flex flex-1">
        {/* Left Panel */}
        <SidePanel />

        {/* Main + News */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Main Content */}
          <div className="flex-1">
            <Wallet />
            <Graph />
          </div>

          {/* Right Panel for News */}
          <div className="w-full md:w-[350px] xl:w-[350px] px-4">
            <News />
          </div>
        </div>
      </div>

      {/* User Dropdown (Fixed Bottom Right) */}
      <div className="fixed bottom-4 right-6 z-50">
        <div
          className="bg-[#1f1f1f] rounded-full px-4 py-2 flex items-center gap-2 shadow-lg cursor-pointer"
          onClick={toggleDropdown}
        >
          <User className="w-5 h-5 text-white" />
          {username ? (
            <span className="text-sm font-medium">{username}</span>
          ) : (
            <span className="text-sm text-gray-400">Loading...</span>
          )}
          {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>

        {dropdownOpen && (
          <div className="relative md:absolute right-0 bottom-full mb-2 bg-[#2a2a2a] rounded-lg shadow-xl p-3 w-48 z-50">
            <button
              onClick={() => handleSelect("HOLDING")}
              className="flex items-center w-full px-3 py-2 hover:bg-[#383838] rounded-md text-sm"
            >
              <Layers className="w-4 h-4 mr-2" /> Holdings
            </button>
            <button
              onClick={() => handleSelect("TRANSACTION")}
              className="flex items-center w-full px-3 py-2 hover:bg-[#383838] rounded-md text-sm"
            >
              <FileText className="w-4 h-4 mr-2" /> Transactions
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center w-full px-3 py-2 hover:bg-[#383838] rounded-md text-sm text-red-400"
            >
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
