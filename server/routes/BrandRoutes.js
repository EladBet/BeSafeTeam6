import express from 'express';
import {
    getAllBrands
} from '../controllers/brandsController.js';

const router = express.Router();

// GET all brands in the DB order by score
router.get('/', getAllBrands)

export default router;