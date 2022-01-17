import { collections } from './database.service'
import { ObjectId, WithId } from 'mongodb'
import Customer from '../model/customer'

export async function createCustomer(name: string) {
  const customer = new Customer(name)
  const result = await (await collections.customers).insertOne(customer)
  if (!result) {
    throw Error('Failed to create pub.')
  }
  return result.insertedId
}

export async function getCustomer(
  id: string
): Promise<WithId<Customer> | null> {
  const query = { _id: new ObjectId(id) }
  return await (await collections.customers).findOne(query)
}
