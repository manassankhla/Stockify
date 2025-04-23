import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import User from "../models/User.js"; // ✅ You missed this earlier

const router = express.Router();

// Register
router.post("/signup", registerUser);

// Login
router.post("/signin", loginUser);

// Get user info
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // protect password
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Error in /me route:", error);
    res.status(500).json({ error: "Server error in /me route" });
  }
});



export default router;
