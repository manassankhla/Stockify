import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Transaction from "../models/transactionModel.js";

const router = express.Router();

// Get all transactions of the authenticated user
router.get("/transactions", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

export default router;
