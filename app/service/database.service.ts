import * as mongoDB from 'mongodb'
import Pub from '../model/pub'
import Customer from '../model/customer'

export const collections = {
  get pubs(): Promise<mongoDB.Collection<Pub>> {
    return getDb().then((db) => db.collection('pubs'))
  },
  get customers(): Promise<mongoDB.Collection<Customer>> {
    return getDb().then((db) => db.collection('customers'))
  },
}

let client: mongoDB.MongoClient | undefined = undefined
let db: mongoDB.Db | undefined = undefined

export async function getClient() {
  if (!client) {
    client = new mongoDB.MongoClient('mongodb://localhost:27017')
    await client.connect()
  }
  return client
}

export async function getDb() {
  if (!db) {
    db = (await getClient()).db('barbot')
  }
  return db
}
