import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  companyCode: String,
  companyName: String,
  type: { type: String, enum: ["BUY", "SELL", "ADD_FUNDS"] },
  quantity: Number,
  price: Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;