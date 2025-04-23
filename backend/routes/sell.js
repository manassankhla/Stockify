import express from "express";
import { sellStock } from "../controllers/sellController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// This is important
router.post("/sell", authMiddleware, sellStock);

export default router;
