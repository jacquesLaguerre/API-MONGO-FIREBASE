import { MongoClient } from "mongodb";

import { uri } from "./secrets.js";

export default function dbConnect() {
  const client = new MongoClient(uri);
  return client.db("mydatabase");
}


