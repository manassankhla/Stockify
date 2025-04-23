import express from "express";
const router = express.Router();

import {buyStock} from "../controllers/buyController.js";
import authMiddleware from "../middleware/authMiddleware.js";


router.post("/buy", authMiddleware, buyStock);

export default router;
