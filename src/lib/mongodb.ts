import { MongoClient } from "mongodb";
import { userDoc } from "./types";
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
}

// setup db
client
  .connect()
  .then(async () => {
    console.log("Connected to MongoDB");
    client.db("rusec");
    client
      .db("rusec")
      .collection<userDoc>("users")
      .createIndex({ username: 1 }, { unique: true });
  })
  .catch((err) => {
    console.error(err);
  });

// check for admin user

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default client;
