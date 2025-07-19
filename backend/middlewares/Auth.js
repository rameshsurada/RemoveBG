// backend/middlewares/Auth.js
import { verifyToken } from "@clerk/backend";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1].trim();

  try {
    const payload = await verifyJwt(token, {
      issuer: "https://destined-tortoise-99.clerk.accounts.dev",
      jwksUrl: "https://destined-tortoise-99.clerk.accounts.dev/.well-known/jwks.json",
    });
console.log("token: ",token)
    req.clerkId = payload.sub;
    next();
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    return res.status(401).json({ message: `Unauthorized ${token}` });
  }
};

export default authUser;
