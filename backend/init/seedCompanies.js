// // backend/init/seedCompanies.js
// import dotenv from "dotenv";
// import path from "path";
// import fs from "fs";
// import mongoose from "mongoose";
// import connectDB from "../config/db.js";
// import Company from "../models/Company.js";

// // Load .env
// dotenv.config({ path: path.resolve("..", ".env") });

// console.log("MONGO_URI:", process.env.MONGO_URI); // debug print

// connectDB().then(async () => {
//   try {
//     const dataPath = path.resolve("../data/companyData.json");
//     const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    
//     await Company.insertMany(data);
//     console.log("✅ Companies inserted successfully!");
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("❌ Error seeding companies:", err);
//     process.exit(1);
//   }
// });
