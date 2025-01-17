// @ts-check
import database from '../MongoDB.mjs';
import { ObjectId } from 'mongodb';

const brandsCollection = database.collection('brands');
const ratesCollection = database.collection('rates');
// Get all brands
const getAllBrands = async (req, res) => {
  try {
    // Get how many brands to limit from the query parameters
    const limit = parseInt(req.query.limit, 10);

    // Fetch all brands from the database
    const brands = await brandsCollection.find().toArray();

    // Add the 'score' field to each brand
    for (let brand of brands) {
      try {
        // Fetch brand data using getBrandTableData
        const lastRun = await getBrandTableData(brand.name);

        if (!lastRun) {
          brand.score = 0; // Default score if no data found
        } else {
          // Calculate size diversity score
          const sizeDiversityScore = calculateSizeDiversity(lastRun.results);

          // Extract about criterion score
          const aboutCriterion = lastRun.results.find(item => item.creteria === 'about');
          const aboutScore = aboutCriterion ? aboutCriterion.score : 0;

          // Extract models criterion score
          const modelsCriterion = lastRun.results.find(item => item.creteria === 'models');
          const modelsScore = modelsCriterion ? modelsCriterion.score : 0;

          // Fetch user ratings from ratesCollection
          const rates = await ratesCollection.find({ brand_id: brand._id }).toArray();
          const userRatings = rates.map(rate => rate.rating);
          const averageUserRating =
            userRatings.length > 0
              ? userRatings.reduce((sum, rating) => sum + rating, 0) / userRatings.length
              : 0;

          // Calculate the overall score as the average of the criteria
          const totalScore =
            (sizeDiversityScore + aboutScore + modelsScore + averageUserRating) / 4;

          // Assign the calculated score to the brand
          brand.score = totalScore;
        }
      } catch (error) {
        console.error(`Error processing brand ${brand.name}:`, error.message);
        brand.score = 0; // Assign default score if an error occurs
      }
    }

    // Sort brands by score in descending order
    let sortedBrands = brands.sort((a, b) => b.score - a.score);

    // Limit the results if specified
    if (limit) {
      sortedBrands = sortedBrands.slice(0, limit);
    }

    // Return the processed brands with their scores
    res.status(200).json({ brands: sortedBrands });
  } catch (error) {
    console.error("Error processing brands:", error.message);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
};

const getBrandTableData = async (brand) => {
  try {
    const nearestRun = await database
      .collection('runs')
      .find({
        'brands.name': brand, // Filter for the brand name
      })
      .sort({ num:-1 }) // Sort by num
      .limit(1) // Get the nearest run
      .toArray();
    if (nearestRun.length === 0) {
      throw new Error('No runs found for this brand');
    }

    // Extract the matching brand details from the nearest run
    const matchingBrand = nearestRun[0].brands.find(b => b.name === brand);
    if (!matchingBrand) {
      throw new Error('Brand not found in the run');
    }

    return matchingBrand;
  } catch (error) {
    throw new Error(error.message);
  }
};

function calculateSizeDiversity(lastRun) {
  const sizeCriteria = lastRun.filter((item) => item.creteria === 'size');

  if (sizeCriteria.length === 0) return 1; // No sizes, low diversity

  const sizes = sizeCriteria.map((item) => item.size);
  const itemCounts = sizeCriteria.map((item) => item.number_of_items);
  const totalItems = itemCounts.reduce((sum, count) => sum + count, 0);

  const uniqueSizes = new Set(sizes).size; // Number of unique sizes
  const averageItemsPerSize = totalItems / uniqueSizes;

  // Score determination based on a predefined rule:
  if (uniqueSizes >= 10 && averageItemsPerSize > 100) return 5;
  if (uniqueSizes >= 6 && averageItemsPerSize > 50) return 4;
  if (uniqueSizes >= 3 && averageItemsPerSize > 20) return 3;
  if (uniqueSizes >= 2) return 2;
  return 1;
}

// Get a single brand by id
const getSingleBrand = async (req, res) => {
  try {
    const brandId = new ObjectId(req.params.brand_id);
    const brand = await brandsCollection.findOne({ _id: brandId });

    if (!brand) {
      return res.status(404).json({ mssg: 'Brand not found' });
    }

    const lastRun = await getBrandTableData(brand.name);
    const sizeDiversityScore = calculateSizeDiversity(lastRun.results);

    const aboutCriterion = lastRun.results.find(item => item.creteria === 'about');
    const aboutScore = aboutCriterion ? aboutCriterion.score : 0;

    const modelsCriterion = lastRun.results.find(item => item.creteria === 'models');
    const modelsScore = modelsCriterion ? modelsCriterion.score : 0;

    const rates = await ratesCollection.find({ brand_id: brandId }).toArray();
    const userRatings = rates.map(rate => rate.rating);
    const averageUserRating = userRatings.length > 0 ? userRatings.reduce((sum, rating) => sum + rating, 0) / userRatings.length : 0;
    const messages = rates.map(rate => rate.message);

    // generate scores
    const score = [
      {
        criterion: 'מגוון מידות',
        details: 'טווח רחב של מידות לכל סוגי הגוף',
        rating: sizeDiversityScore,
      },
      {
        criterion: 'מגוון דוגמניות',
        details: 'התמונות של הדוגמניות באתר מציגות מגוון מבני גוף וצבע',
        rating: modelsScore,
      },
      {
        criterion: 'אודות',
        details: 'האם החברה מקדמת באמצעות הפרסום שלה דימוי גוף חיובי',
        rating: aboutScore,
      },
      {
        criterion: 'דירוג משתמשים',
        details: 'ממוצע של דירוגי המשתמשים',
        rating: averageUserRating,
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
      messages,
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
