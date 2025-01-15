import brands from '../data/brandsData.js';

// Get all brands
const getAllBrands = (req, res) => {
    // get how much brands to limit
    const limit = parseInt(req.query.limit, 10) || 10;

    const filteredBrands = brands.map(brand => ({
        id: brand.id,
        name: brand.name,
        logo: brand.logo,
        image: brand.image,
        score: 4 // TODO: change the score to determine by the algorithm
    }));

    // Sort the brands by score in descending order
    filteredBrands.sort((a, b) => b.score - a.score);
    // Limit brands
    const limitedBrands = filteredBrands.slice(0, limit);

    res.status(200).json({ brands:limitedBrands });
};


// Get a single brand
const getSingleBrand = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const brand = brands.find(d => d.id === id);

    if (!brand) {
        return res.status(404).json({ mssg: "Brand not found" });
    }
    res.status(200).json({ brand });
};

// Create a new brand
// const createBrand = (req, res) => {
//     const { name, color, imageUrl } = req.body;
//     const newDuck = {
//         id: ducks.length ? ducks[ducks.length - 1].id + 1 : 1,
//         name,
//         color,
//         imageUrl
//     };
//     ducks.push(newDuck);
//     res.status(201).json({ duck: newDuck });
// };

export{
    getAllBrands,
    getSingleBrand
}