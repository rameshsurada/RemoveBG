import { verifyToken } from "@clerk/backend";
import exp from "constants";

 const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1].trim();
  console.log("Incoming token:", token); // 👈 log it

  try {
    const payload = await verifyToken(token, {
      issuer: "https://destined-tortoise-99.clerk.accounts.dev",
      jwksUrl: "https://destined-tortoise-99.clerk.accounts.dev/.well-known/jwks.json",
    });

    console.log("Token verified. Payload:", payload); // 👈 log payload
    req.clerkId = payload.sub;
    next();
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    return res.status(401).json({ message: "Non authorized" });
  }
};

export default authUser;
