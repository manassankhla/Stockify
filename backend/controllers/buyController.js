import Company from "../models/Company.js";
import Holding from "../models/holdingModel.js";
import Wallet from "../models/walletModel.js";
import Transaction from "../models/transactionModel.js";

export const buyStock = async (req, res) => {
  try {
    const { stockId, quantity } = req.body;
    const userId = req.user.id;

    // Basic validations
    if (!stockId || !quantity || quantity <= 0 || !userId) {
      return res.status(400).json({ message: "Invalid input parameters" });
    }

    // Fetch company details
    const company = await Company.findById(stockId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const totalCost = company.currentPrice * quantity;

    // Fetch wallet
    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      // If wallet doesn't exist, create one with 0 balance
      wallet = new Wallet({ userId, Amount: 0 });
    }

    if (wallet.Amount < totalCost) {
      return res.status(400).json({ message: "Insufficient balance in wallet" });
    }

    // Deduct amount from wallet
    wallet.Amount -= totalCost;
    await wallet.save();

    // Check if user already has holdings for this company
    let holding = await Holding.findOne({ userId, companyCode: company.code });

    if (holding) {
      // Update existing holding: recalculate avgPrice
      const newTotalQuantity = holding.quantity + quantity;
      const newAvgPrice =
        (holding.avgPrice * holding.quantity + totalCost) / newTotalQuantity;

      holding.quantity = newTotalQuantity;
      holding.avgPrice = newAvgPrice;
      holding.currentPrice = company.currentPrice;
      await holding.save();
    } else {
      // Create new holding
      holding = new Holding({
        userId,
        companyId: company._id,
        companyCode: company.code,
        companyName: company.name,
        quantity,
        avgPrice: company.currentPrice,
        currentPrice: company.currentPrice,
      });
      await holding.save();
    }

    // Record transaction
    const transaction = new Transaction({
      userId,
      type: "BUY",
      companyCode: company.code,
      companyName: company.name,
      quantity,
      price: company.currentPrice,
      total: totalCost,
    });
    await transaction.save();

    res.status(200).json({
      message: "Stock bought successfully",
      holding: {
        companyCode: holding.companyCode,
        companyName: holding.companyName,
        quantity: holding.quantity,
        avgPrice: parseFloat(holding.avgPrice.toFixed(2)),
        currentPrice: holding.currentPrice,
      },
      walletBalance: parseFloat(wallet.Amount.toFixed(2)),
    });

  } catch (error) {
    console.error("Error in buyStock:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
