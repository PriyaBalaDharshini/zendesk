import express from 'express';
import cors from 'cors';
import AppRoutes from './src/routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(AppRoutes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
