// controllers/sellController.js

import Holding from "../models/holdingModel.js";
import Company from "../models/Company.js";
import Wallet from "../models/walletModel.js";
import Transaction from "../models/transactionModel.js";

export const sellStock = async (req, res) => {
  try {
    const { stockId, quantity } = req.body;
    const userId = req.user.id;

    if (!stockId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid input" });
    }

    // Step 1: Get company by _id
    const company = await Company.findById(stockId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Step 2: Get user's holding for this company
    const holding = await Holding.findOne({ userId, companyCode: company.code });

    if (!holding || holding.quantity < quantity) {
      return res.status(400).json({ message: "Not enough shares to sell" });
    }

    const sellValue = company.currentPrice * quantity;

    // Step 3: Update holding
    holding.quantity -= quantity;
    holding.currentPrice = company.currentPrice;

    if (holding.quantity === 0) {
      await Holding.deleteOne({ _id: holding._id });
    } else {
      await holding.save();
    }

    // Step 4: Update/Add to wallet
    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      wallet = new Wallet({ userId, Amount: 0 });
    }

    wallet.Amount += sellValue;
    await wallet.save();

    // Step 5: Record the transaction
    const transaction = new Transaction({
      userId,
      type: "SELL",
      companyCode: company.code,
      companyName: company.name,
      quantity,
      price: company.currentPrice,
      total: sellValue,
    });

    await transaction.save();

    res.status(200).json({
      message: "Stock sold successfully",
      soldQuantity: quantity,
      amountReceived: sellValue,
      walletBalance: parseFloat(wallet.Amount.toFixed(2)),
    });

  } catch (err) {
    console.error("Error in sellStock:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
