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


// Get a single brand by name
const getSingleBrand = (req, res) => {
    const name = req.params.brand.toLowerCase();
    const brand = brands.find(d => d.name.toLowerCase() === name);

    if (!brand) {
        return res.status(404).json({ mssg: "Brand not found" });
    }

    // TODO: chage to get the real score
    const score = [{
        criterion:"Sizing Variety",
        details: "Extensive range of sizes for all body types",
        rating: 4,
        },
        {
        criterion:"Users rating",
        details: "avg of the ratings given by the hsers",
        rating: 3,
        }
    ]

    const totalRating = score.reduce((sum, criterion) => sum + criterion.rating, 0);
    const overallRating = totalRating / score.length;

    const brandResponse = {
        name: brand.name,
        logo: brand.logo,
        image: brand.image,
        overall_rating: overallRating,
        score: score
    };
    res.status(200).json({ brand:brandResponse });
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