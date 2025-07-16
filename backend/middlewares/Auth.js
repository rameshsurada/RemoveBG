import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.replace("Bearer ", "").trim();

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    // This method validates the token and returns the session info
    const session = await clerk.sessions.getSession(token);

    if (!session) {
      return res.status(401).json({ success: false, message: "Invalid session token" });
    }

    // Attach Clerk userId to request
    req.clerkId = session.userId;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ success: false, message: "Unauthorized: " + error.message });
  }
};

export default authUser;
