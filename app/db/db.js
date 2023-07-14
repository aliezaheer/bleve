import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

//connection
export async function connectToDatabase() {
  const client = await MongoClient.connect(uri);
  return client;
}
