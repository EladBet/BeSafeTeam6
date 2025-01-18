import express from 'express';
import { createRate, getBrandRates } from '../controllers/ratingController.js';

const router = express.Router();

// POST new rate
router.post('/new', createRate);

// GET all rates for a specific brand
router.get('/:brand_id', getBrandRates);

export default router;
