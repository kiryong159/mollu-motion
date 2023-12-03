import { MongoClient } from "mongodb";
const PW = process.env.MONGO_PW;
const url = `mongodb+srv://kiryong159:${PW}@mollumotion.iif7uxc.mongodb.net/?retryWrites=true&w=majority`;
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
