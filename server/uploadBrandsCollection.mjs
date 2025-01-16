import { MongoClient, ServerApiVersion } from 'mongodb';

// MongoDB connection URI
const uri = 'mongodb+srv://admin:aZ9ms3zmb3PP9v3@cluster0.0krd2.mongodb.net/?retryWrites=true&w=majority';

const mongo = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function uploadData() {
  try {
    await mongo.connect();
    const database = mongo.db('BodyFriendly');
    const collection = database.collection('brands');

    // Delete the collection if it exists
    const collections = await database.listCollections({ name: 'brands' }).toArray();
    if (collections.length > 0) {
      await collection.drop();
      console.log('Existing collection dropped.');
    } else {
      console.log('No existing collection found.');
    }

    // Data to upload
    const data = {
      brands: [
        {
          name: 'Castro',
          logo: 'https://example.com/castro_logo.jpg',
          image: 'https://example.com/castro_image.png',
          home_page: 'https://www.castro.com',
          rating_overall: 3.5,
          links: [
            { criteria: 'size', size: 'XL', type: 'top', link: 'https://www.castro.com/size-xl-top' },
            { criteria: 'size', size: 'L', type: 'bottom', link: 'https://www.castro.com/size-l-bottom' },
            { criteria: 'about', link: 'https://www.castro.com/about' },
          ],
        },
        {
          name: 'Renuar',
          logo: 'https://example.com/renuar_logo.jpg',
          image: 'https://example.com/renuar_image.png',
          home_page: 'https://www.renuar.com',
          rating_overall: 4.5,
          links: [
            { criteria: 'size', size: 'XL', type: 'top', link: 'https://www.renuar.com/size-xl-top' },
            { criteria: 'size', size: 'L', type: 'bottom', link: 'https://www.renuar.com/size-l-bottom' },
            { criteria: 'about', link: 'https://www.renuar.com/about' },
          ],
        },
      ],
    };

    // Insert brands into the collection
    const result = await collection.insertMany(data.brands);

    console.log(`Data uploaded successfully. Inserted IDs: ${Object.values(result.insertedIds)}`);
  } catch (error) {
    console.error('Error uploading data:', error);
  } finally {
    await mongo.close();
  }
}

uploadData();
