// backend/middlewares/Auth.js
import { verifyToken } from "@clerk/backend";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Missing token" });

  const token = authHeader.replace("Bearer ", "").trim();

  try {
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    req.clerkId = payload.sub; 
    next();
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authUser;
