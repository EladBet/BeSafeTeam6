const scores = []

// Create a new rate
const createRate = (req, res) => {
    const { brand, score, text } = req.body;

    if (!brand || !score) {
        return res.status(400).json({ mssg: "Missing required fields: brand or score" });
    }

    const newRating = {
        brand,
        score,
        text
    };

    scores.push(newRating);
    // TODO: push rate to real place

    res.status(201).json({ rate:newRating });
};

export{
    createRate
}