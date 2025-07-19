
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Only needed if Node < 18

import ConnectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import { imageRouter } from './routes/imageRoutes.js';

const app = express();


app.use(cors({
  origin: process.env.FRONTEND_URL, 
  credentials: true,
}));

app.use(express.json());


app.get('/test-jwk', async (req, res) => {
  try {
    const response = await fetch("https://destined-tortoise-99.clerk.accounts.dev/.well-known/jwks.json");
    const data = await response.json();

    if (data?.keys?.length) {
      return res.status(200).json({ success: true, message: "JWKs resolved", count: data.keys.length });
    } else {
      return res.status(500).json({ success: false, message: "No keys found in JWKs" });
    }
  } catch (err) {
    console.error("JWK fetch error:", err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});


app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);


app.get('/', (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 4000;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.error(" Failed to connect to DB:", err);
  });
