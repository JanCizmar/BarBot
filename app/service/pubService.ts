import {collections} from "./database.service";
import Pub from "../model/pub";

export async function getPubs() {
  return (await (await collections.pubs).find({}).toArray()) as any as Pub[]
}

export async function createPub(pub: Pub) {
  const result = await (await collections.pubs).insertOne(pub)
  if (!result) {
    throw Error("Failed to create pub.")
  }
}
