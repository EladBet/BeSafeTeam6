// @ts-check
import database from '../MongoDB.mjs';
import { ObjectId } from 'mongodb';

const brandsCollection = database.collection('brands');

// Get all brands
const getAllBrands = async (req, res) => {
  // get how much brands to limit
  const limit = parseInt(req.query.limit, 10);

  let query = brandsCollection.find().sort({ score: 'descending' });
  if (limit) {
    query = query.limit(limit);
  }
  res.status(200).json({ brands: await query.toArray() });
};

// Get a single brand by id
const getSingleBrand = async (req, res) => {
  try {
    const brandId = new ObjectId(req.params.brand_id);
    const brand = await brandsCollection.findOne({ _id: brandId });
    if (!brand) {
      return res.status(404).json({ mssg: 'Brand not found' });
    }

    // Example scores
    const score = [
      {
        criterion: 'Sizing Variety',
        details: 'Extensive range of sizes for all body types',
        rating: 4,
      },
      {
        criterion: 'Users rating',
        details: 'Average user ratings',
        rating: 3,
      },
    ];

    const totalRating = score.reduce((sum, criterion) => sum + criterion.rating, 0);
    const overallRating = Math.round((totalRating / score.length) * 2) / 2;

    const brandResponse = {
      _id: brand._id,
      name: brand.name,
      logo: brand.logo,
      image: brand.image,
      overall_rating: overallRating,
      score,
    };

    res.status(200).json({ brand: brandResponse });
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ error: 'Failed to fetch brand' });
  }
};

// Create a new Brand
const createBrand = async (req, res) => {
  const { name, logo, image, link } = req.body;

  try {
    const result = await brandsCollection.insertOne({
      name,
      logo,
      image,
      link,
    });

    // Return the insertedId from the result
    res.status(201).json({ _id: result.insertedId });
  } catch (error) {
    console.error('Error creating brand:', error);
    res.status(500).json({ error: error.message });
  }
};

export { getAllBrands, getSingleBrand, createBrand };
