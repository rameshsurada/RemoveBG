
import express from "express";
import { clerkWebhooks,getUserCredits } from "../controllers/UserController.js";

const router = express.Router();


router.post("/webhook", clerkWebhooks);

router.get("/credits", getUserCredits);


export default router;
