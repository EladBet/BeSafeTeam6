import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import Brands from './data/brandsData.js';

dotenv.config();

const mongoUrl =
  'mongodb+srv://admin:' +
  process.env.MONGO_DB_PASSWORD +
  '@cluster0.0krd2.mongodb.net/?retryWrites=true&w=majority';

const mongo = new MongoClient(mongoUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function uploadData() {
  try {
    await mongo.connect();
    console.log('Connected to MongoDB');

    const database = mongo.db('BodyFriendly');
    const collection = database.collection('brands');

    // Clear existing data if necessary
    await collection.deleteMany({});
    console.log('Cleared existing collection data');

    // Insert new data
    const result = await collection.insertMany(Brands);
    console.log(`Successfully inserted ${result.insertedCount} documents`);
  } catch (error) {
    console.error('Error uploading data:', error);
  } finally {
    await mongo.close();
    console.log('Disconnected from MongoDB');
  }
}

uploadData();
