
// API controller function to manager clerk user with database
//http://localhost:4000/api/user/webhooks

// userController.js
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

    // Log incoming data for debugging
    console.log("Webhook event type:", type);
    console.log("Webhook data:", JSON.stringify(data, null, 2));
    console.log("data.email_address:", data.email_address);

    // Check if email_address exists and is an array with at least one item for user.created and user.updated
    if (
      (type === "user.created" || type === "user.updated") &&
      (!Array.isArray(data.email_address) || data.email_address.length === 0)
    ) {
      console.error("Webhook error: email_address is missing or empty");
      return res.status(400).json({ error: "Invalid payload: missing email" });
    }

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_address[0].email_address,
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        await userModel.create(userData);
        return res.status(201).json({ message: "User created" });
      }

      case "user.updated": {
        const userData = {
          email: data.email_address[0].email_address,
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        return res.json({ message: "User updated" });
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        return res.json({ message: "User deleted" });
      }

      default:
        return res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { clerkWebhooks };
