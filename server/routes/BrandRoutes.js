import express from 'express';
import {
    getAllBrands,
    getSingleBrand
} from '../controllers/brandsController.js';

const router = express.Router();

// GET all brands in the DB order by score
router.get('/', getAllBrands)

// GET specific brand by name
router.get('/:brand', getSingleBrand)


export default router;