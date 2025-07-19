import express from "express";
import { removeBgImage } from "../controllers/ImageController.js";
import upload from "../middlewares/Multer.js";
import authUser from "../middlewares/Auth.js";

export const imageRouter = express.Router();

// Correct order: authUser first, then upload middleware
imageRouter.post('/remove-bg', authUser, upload.single('image'), removeBgImage);
