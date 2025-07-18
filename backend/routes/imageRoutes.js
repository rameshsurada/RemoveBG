import express from "express";
import { removeBgImage } from "../controllers/ImageController.js";
import upload from "../middlewares/Multer.js";
import authUser from "../middlewares/Auth.js";

export const imageRouter = express.Router()


imageRouter.post('/remove-bg', upload.single('image'), authUser, removeBgImage);