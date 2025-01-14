import { MongoClient, ServerApiVersion } from 'mongodb';
import fs from 'fs';
import csv from 'csv-parser';

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

// Function to parse CSV and insert data into the database
const insertDataFromCSV = async (filePath) => {
  const collection = database.collection('brands');
  const data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => data.push(row))
      .on('end', async () => {
        try {
          await collection.insertMany(data);
          console.log('Data inserted successfully');
          resolve();
        } catch (error) {
          console.error('Error inserting data:', error);
          reject(error);
        }
      })
      .on('error', (error) => {
        console.error('Error reading CSV file:', error);
        reject(error);
      });
  });
};

// Call the function to insert data
const filePath = '/Users/noashachar/Downloads/tableRating.csv'; // Replace with the actual path
await insertDataFromCSV(filePath);
