import database from '../MongoDB.mjs';
import { ObjectId } from 'mongodb';

const ratesCollection = database.collection('rates');
const brandsCollection = database.collection('brands');

// Create a new rate
export const createRate = async (req, res) => {
  const { brand_id, rating, message } = req.body;

  if (!rating) {
    return res.status(400).json({ error: 'Rating field is required.' });
  }

  try {
    const brand = await brandsCollection.findOne({ _id: new ObjectId(brand_id) });

    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    await ratesCollection.insertOne({
      brand_id: new ObjectId(brand_id),
      rating,
      message,
      createdAt: Date.now(),
    });

    res.status(201).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBrandRates = async (req, res) => {
  const { brand_id } = req.params;

  try {
    const brandRates = await ratesCollection
      .find({ brand_id: new ObjectId(brand_id) })
      .sort({ createdAt: 'descending' })
      .limit(15)
      .toArray();

    res.status(200).json(brandRates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBrandTable = async (req, res) => {
  const { brand } = req.params;

  try {
    const nearestRun = await database.collection('runs')
      .find({
        'brands.name': brand, // Filter for the brand name
      })
      .sort({ run_time: 1 }) // Sort by run_time (ascending)
      .limit(1) // Get the nearest run
      .toArray();

    if (nearestRun.length === 0) {
      return res.status(404).json({ error: 'No runs found for this brand' });
    }

    // Extract the matching brand details from the nearest run
    const matchingBrand = nearestRun[0].brands.find(b => b.name === brand);

    if (!matchingBrand) {
      return res.status(404).json({ error: 'Brand not found in the run' });
    }

    res.status(200).json({ brand:matchingBrand });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
