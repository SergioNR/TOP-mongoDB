import { MongoClient, ServerApiVersion } from "mongodb";
import { TestRequest } from "./TestRequest.mjs";


const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



const insertInDB = async () => {
  try {
    await client.connect();
    
    const newUsersDatabase = client.db("newUsers");
    const newUsersCollection = newUsersDatabase.collection("newUsers");


  } catch (error) {
    console.error(error)
    
  } finally {
    await client.close();
  }
}

const findOneInCollection = async (filter, collection) => {
  

    const result = collection.find(filter)

    console.log(result)

}

