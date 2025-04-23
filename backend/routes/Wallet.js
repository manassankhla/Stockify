import express from "express";
import { createOrUpdateWallet, getWalletBalance } from "../controllers/walletController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create or update wallet (userId from token) and add funds
router.post("/wallet", authMiddleware, createOrUpdateWallet);

// ✅ Get wallet balance (userId from token)
router.get("/wallet", authMiddleware, getWalletBalance);

export default router;
