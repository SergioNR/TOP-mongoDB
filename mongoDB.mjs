import { MongoClient, ServerApiVersion } from "mongodb";


const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Define the testRequests database

const testRequestDB = client.db(`testRequests`);

// define the testRequests collection

export const testRequestCollection = testRequestDB.collection(`testRequestCollection`);

