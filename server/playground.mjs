import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const port = 4567;

app.use(cors()); // allow accessing the server from all domains

// MongoDB connection URI
const uri = 'mongodb+srv://admin:aZ9ms3zmb3PP9v3@cluster0.0krd2.mongodb.net/?retryWrites=true&w=majority';

const mongo = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

await mongo.connect();
const database = mongo.db('BodyFriendly');

app.get('/brands', async (req, res) => {
  try {
    const collection = database.collection('brands');
    const brands = await collection.find({}).toArray();
    res.status(200).json(brands);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
