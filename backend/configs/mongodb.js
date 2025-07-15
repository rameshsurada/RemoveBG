// configs/mongodb.js
import mongoose from "mongoose";

const ConnectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("📡 Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "RemoveBG",
    });

    console.log("✅ Connected to MongoDB: RemoveBG");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

export default ConnectDB;
