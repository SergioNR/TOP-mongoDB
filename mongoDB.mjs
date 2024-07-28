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

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect(); //* Connect to the MongoDB cluster

       // Get the database and collection on which to run the operation
       const mongoExerciseDB = client.db("gettingStarted"); //* This is a DB of client
       const mongoExerciseCollection = mongoExerciseDB.collection("people"); //* This is a collection of DB
       
       
       // Create new documents that will be inserted into the collection
       
       
    //    const peopleDocuments = [
    //      {
    //        "name": { "first": "Alan", "last": "Turing" },
    //        "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
    //        "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
    //        "contribs": [ "Turing machine", "Turing test", "Turingery" ],
    //        "views": 1250000
    //      },
    //      {
    //        "name": { "first": "Grace", "last": "Hopper" },
    //        "birth": new Date(1906, 12, 9), // Dec 9, 1906                                                                                                                                 
    //        "death": new Date(1992, 1, 1),  // Jan 1, 1992                                                                                                                                  
    //        "contribs": [ "Mark I", "UNIVAC", "COBOL" ],
    //        "views": 3860000
    //      }
    //    ];

       const exampleSingleUser = {
        "firstName": `juan`,
        "lastName": `perez`,
        "age": 25,
        "email": `juanperez@gmail.com`,
        "UUID": crypto.randomUUID(),
       };

       // Insert the documents into the specified collection        
        // const dbInsertion = await mongoExerciseCollection.insertMany(peopleDocuments).then((result) => {
        //     console.log(`Successfully inserted ${result.insertedCount} items!`);
        // });
       const dbInsertion = await mongoExerciseCollection.insertOne(exampleSingleUser).then((result) => {
            if (result) {
                console.log(result.insertedId);
            }
            else {
                console.log(`item was not inserted`);
            }

         }); //* Need to add await to make sure that the client connects to the DB before running the insertion
       
       
    // //    Find the document
    //    const filter = { 
    //     "name.last": "Turing",
    //     "name.first": { "$regex": "alan", "$options": "i" },
    //     "contribs": { $in: [ "Turing machine"] },
    //     }; //* Filters are created using an object and can be really complex
       
    //    const document = await mongoExerciseCollection.findOne(filter);
    //    // Print results
    //    console.log(`Document found: ${JSON.stringify(document)}`); //? Why would i want this to be a string?
    //    console.log(document);  //? for a console log, it makes much more sense to see the whole object as is - right?

       
      } catch (err) {
       console.log(err.stack);   
    } finally {
      await client.close();
  }
  

}

// run().catch(console.dir);


const insertManyTestRequest = async (testRequest) => {
  
  try {
    await client.connect();
    const usersDB = client.db("users");
    const usersCollection = usersDB.collection("usersCollection");

    await usersCollection.insertMany(testRequest).then((result) => {
      console.log(result);
      console.log(`Successfully inserted ${result.insertedCount} items!`);
    });

  } catch (err) {
    console.log(err.stack);
  } finally {
   await client.close();
  }
};




const testRequest = new TestRequest("juan", "perez")
const testRequest2 = new TestRequest("juan", "perez")
const testRequest3 = new TestRequest("juan", "perez")

const testRequestArray = [testRequest, testRequest2, testRequest3];

insertManyTestRequest(testRequestArray);