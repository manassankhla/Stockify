import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { viewHoldings } from '../controllers/holdingController.js'; // ✅ Added this

const router = express.Router();

// Route to view all holdings for the authenticated user
router.get('/holdings', authMiddleware, viewHoldings);

export default router;
