import express from 'express';
import Company from '../models/Company.js'; // Make sure the path is correct

const router = express.Router();

// GET all companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error('Error fetching companies:', err.message);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

export default router;
