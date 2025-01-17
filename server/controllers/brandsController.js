import brands from '../data/brandsData.js';

// Get all brands
const getAllBrands = (req, res) => {
  // get how much brands to limit
  const limit = parseInt(req.query.limit, 10) || 10;

  const filteredBrands = brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    logo: brand.logo,
    image: brand.image,
    score: 4, // TODO: change the score to determine by the algorithm
  }));

  // Sort the brands by score in descending order
  filteredBrands.sort((a, b) => b.score - a.score);
  // Limit brands
  const limitedBrands = filteredBrands.slice(0, limit);

  res.status(200).json({ brands: limitedBrands });
};

// Get a single brand by name
const getSingleBrand = (req, res) => {
  const brand_id = req.params.brand_id;
  const brand = brands.find((b) => b.id == brand_id);

  if (!brand) {
    return res.status(404).json({ mssg: 'Brand not found' });
  }

  // TODO: chage to get the real score
  const score = [
    {
      criterion: 'Sizing Variety',
      details: 'Extensive range of sizes for all body types',
      rating: 4,
    },
    {
      criterion: 'Users rating',
      details: 'avg of the ratings given by the hsers',
      rating: 3,
    },
  ];

  const totalRating = score.reduce((sum, criterion) => sum + criterion.rating, 0);
  const overallRating = Math.round((totalRating / score.length) * 2) / 2;

  const brandResponse = {
    name: brand.name,
    logo: brand.logo,
    image: brand.image,
    overall_rating: overallRating,
    score: score,
  };

  res.status(200).json({ brand: brandResponse });
};

// Create a new Brand
const createBrand = (req, res) => {
  const { name, logo, image, link } = req.body;
  const newBrand = {
    // todo when we move to mongo, mongo will choose the id.
    id: brands.length ? brands[brands.length - 1].id + 1 : 1,
    name,
    logo,
    image,
    link,
  };
  brands.push(newBrand);
  res.status(201).json({ id: newBrand.id });
};

export { getAllBrands, getSingleBrand, createBrand };
