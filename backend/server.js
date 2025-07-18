
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import ConnectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import { imageRouter } from './routes/imageRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 4000;

ConnectDB()
  .then(() => app.listen(PORT, () => console.log("Server running on port :",PORT)))
  .catch(err => console.error(err));
