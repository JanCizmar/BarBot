import * as mongoDB from "mongodb";
import Pub from "../model/pub";

export const collections = {
  get pubs(): Promise<mongoDB.Collection<Pub>> {
    return getDb().then(db => db.collection("pubs"))
  }
}

let client: mongoDB.MongoClient | undefined = undefined;
let db: mongoDB.Db | undefined = undefined

export async function getClient() {
  if (!client) {
    client = new mongoDB.MongoClient("mongodb://localhost:27017");
    await client.connect();
  }
  return client
}

export async function getDb() {
  if (!db) {
    db = (await getClient()).db("barbot");
  }
  return db
}
