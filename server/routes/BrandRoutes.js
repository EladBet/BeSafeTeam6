import express from 'express';
import {
    getAllBrands,
    getSingleBrand,
    createBrand
} from '../controllers/brandsController.js';

const router = express.Router();

// GET all brands in the DB order by score
router.get('/', getAllBrands)

// GET specific brand by name
router.get('/:brand', getSingleBrand)

// POST new brand
router.post('/', createBrand)

export default router;