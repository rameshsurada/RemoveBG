
import userModel from "../models/userModel.js";


export const clerkWebhooks = async (req, res) => {
  const { id, email_addresses, image_url, first_name, last_name } = req.body.data;

  try {
    const email = email_addresses[0].email_address;

    const userExists = await userModel.findOne({ clerkId: id });

    if (!userExists) {
      const newUser = new userModel({
        clerkId: id,
        email,
        photo: image_url,
        firstName: first_name,
        lastName: last_name,
      });

      await newUser.save();
    }

    res.status(200).json({ message: "User synced" });
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getUserCredits = (req, res) => {
  res.json({
    success: true,
    credits: 5
  });
};

