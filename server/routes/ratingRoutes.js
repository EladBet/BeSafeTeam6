import express from 'express';
import {
    createRate
} from '../controllers/ratingController.js';

const router = express.Router();

// POST new rate
router.post('/', createRate)

export default router;