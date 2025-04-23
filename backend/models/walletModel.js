import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Linking it to the User model
    required: true,
    unique: true,
  },
  Amount: {
    type: Number,
    required: true,
    default: 0, // Initial wallet balance can be set to 0
  },
});

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;
