import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";

import buyRoutes from "./routes/buy.js";
import sellRoutes from"./routes/sell.js";
import walletRoutes from './routes/Wallet.js';

import transactionRoutes from "./routes/transaction.js";


import companyRoutes from "./routes/companies.js";

import HoldingRoute from "./routes/newHolding.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/stock", buyRoutes);     // for buy
app.use("/api/stock", sellRoutes);    // for sell
app.use("/api", walletRoutes);
app.use("/api", transactionRoutes);
app.use("/api", companyRoutes);
app.use("/api", HoldingRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));