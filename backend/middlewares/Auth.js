import { verifyToken } from "@clerk/backend";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = await verifyToken(token, {
      issuer: "https://destined-tortoise-99.clerk.accounts.dev",
      jwtKey: process.env.CLERK_PUBLIC_KEY.replace(/\\n/g, '\n'), // fix escaped newline
    });

    req.clerkId = payload.sub;
    next();
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authUser;
