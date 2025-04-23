import Wallet from '../models/walletModel.js';
import Transaction from '../models/transactionModel.js'; // Import the transaction model

// Create or Update Wallet (Add Funds)
export const createOrUpdateWallet = async (req, res) => {
  const { amount } = req.body; // Amount to be added to the wallet
  const userId = req.user.id;  // Get the user ID from the authenticated request

  // Validate the amount
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    // Find the user's wallet
    let wallet = await Wallet.findOne({ userId });

    // If wallet does not exist, create a new one
    if (!wallet) {
      wallet = new Wallet({ userId, Amount: amount });
    } else {
      // If wallet exists, update the amount
      wallet.Amount += amount;
    }

    // Save the wallet after adding the funds
    await wallet.save();

    // Create a transaction record for the fund addition
    const addFundTransaction = new Transaction({
      userId,
      type: "ADD_FUNDS",  // Type of transaction (funds added)
      total: amount,      // The amount added
    });

    // Save the transaction
    await addFundTransaction.save();

    // Respond with success and the updated wallet balance
    res.status(200).json({
      message: 'Wallet updated successfully',
      balance: wallet.Amount,  // Return the updated balance
    });

  } catch (err) {
    console.error('Error updating wallet:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Wallet Balance
export const getWalletBalance = async (req, res) => {
  const userId = req.user.id;  // Get the user ID from the authenticated request

  try {
    // Find the user's wallet
    const wallet = await Wallet.findOne({ userId });

    // If wallet is not found, return a 404 response
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    // Respond with the user's wallet balance
    res.status(200).json({ balance: wallet.Amount });

  } catch (err) {
    console.error('Error fetching wallet balance:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
