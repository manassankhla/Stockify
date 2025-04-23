import Holding from '../models/holdingModel.js';
import Company from '../models/Company.js';

export const viewHoldings = async (req, res) => {
  try {
    const userId = req.user.id;

    const holdings = await Holding.find({ userId });

    if (!holdings.length) {
      return res.status(200).json({ message: 'No holdings found.', data: [] });
    }

    const enrichedHoldings = await Promise.all(holdings.map(async (holding) => {
      const company = await Company.findOne({ code: holding.companyCode });

      const currentPrice = company ? company.currentPrice : holding.currentPrice;
      const currentValue = holding.quantity * currentPrice;
      const invested = holding.quantity * holding.avgPrice;
      const profitLoss = currentValue - invested;
      const profitLossPercent = ((profitLoss / invested) * 100).toFixed(2);

      return {
        companyCode: holding.companyCode,
        companyId: company ? company._id : null,
        companyName: holding.companyName,
        quantity: holding.quantity,
        avgPrice: parseFloat(holding.avgPrice.toFixed(2)),
        currentPrice: parseFloat(currentPrice.toFixed(2)),
        currentValue: parseFloat(currentValue.toFixed(2)),
        invested: parseFloat(invested.toFixed(2)),
        profitLoss: parseFloat(profitLoss.toFixed(2)),
        profitLossPercent: parseFloat(profitLossPercent),
      };
    }));

    res.status(200).json({ data: enrichedHoldings });

  } catch (error) {
    console.error('Error in viewHoldings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
