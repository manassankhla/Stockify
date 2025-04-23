import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: String,
  code: String,
  sector: String,
  logoUrl: String,
  currentPrice: Number,
  change: Number,
  percentChange: Number,
  volume: Number,
  marketCap: String,
  high52: Number,
  low52: Number,
  peRatio: Number,
  dividendYield: String,
  lastUpdated: String,
});

const Company = mongoose.model("Company", companySchema);

export default Company;
