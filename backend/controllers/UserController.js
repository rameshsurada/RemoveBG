// backend/controllers/userController.js
import { Webhook } from "svix";
import userModel from "../models/userModel.js";
import ConnectDB from "../configs/mongodb.js";

const clerkWebhooks = async (req, res) => {
  try {
    await ConnectDB();

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    let email = "";
    if (Array.isArray(data.email_addresses) && data.email_addresses.length > 0) {
      email = data.email_addresses[0]?.email_address || "";
    } else if (typeof data.primary_email_address === "string") {
      email = data.primary_email_address;
    }

    if ((type === "user.created" || type === "user.updated") && !email) {
      return res.status(400).json({ error: "Invalid payload: missing email" });
    }

    switch (type) {
      case "user.created":
        await userModel.create({
          clerkId: data.id,
          email,
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        });
        return res.status(201).json({ message: "User created" });

      case "user.updated":
        await userModel.findOneAndUpdate(
          { clerkId: data.id },
          {
            email,
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            photo: data.image_url || "",
          }
        );
        return res.json({ message: "User updated" });

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
        return res.json({ message: "User deleted" });

      default:
        return res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// backend/controllers/userController.js


const userCredits = async (req, res) => {
  try {
    await ConnectDB();

    const { clerkId } = req;

    if (!clerkId) {
      return res.status(401).json({ success: false, message: "Unauthorized: clerkId missing" });
    }

    const userData = await userModel.findOne({ clerkId });

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.error("User credits error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export { clerkWebhooks, userCredits };
