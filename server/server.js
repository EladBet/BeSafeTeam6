import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
// import rubberDuckRoutes from './routes/rubberDucks.js'; // Import the routes
import BrandRoutes from './routes/BrandRoutes.js';
import ratingRouter from './routes/ratingRoutes.js';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'images')); // Where the image will be saved
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Save with unique name
  },
});
const upload = multer({ storage: storage }); // Create multer instance with configuration

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static images

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

// Define the route for image upload
app.post('/images', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imageUrl = `/images/${req.file.filename}`; // Generate image URL for client to access
  res.json({ imageUrl });
});

// Use the routes file for all `/brands` routes
app.use('/brands', BrandRoutes);

// Use the routes file for all `/ratings` routes
app.use('/ratings', ratingRouter);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
