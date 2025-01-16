import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import dotenv from 'dotenv';
// import rubberDuckRoutes from './routes/rubberDucks.js'; // Import the routes
import BrandRoutes from './routes/BrandRoutes.js';
import ratingRouter from './routes/ratingRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static images

app.use(cors());

// Use the routes file for all `/brands` routes
app.use('/brands', BrandRoutes);

// Use the routes file for all `/ratings` routes
app.use('/ratings', ratingRouter);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
