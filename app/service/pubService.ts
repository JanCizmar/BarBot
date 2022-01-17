import { collections } from './database.service'
import Pub from '../model/pub'
import generateSlug from '../util/generateSlug'
import { ObjectId, WithId } from 'mongodb'

export async function getPubs() {
  return (await (await collections.pubs).find({}).toArray()) as any as Pub[]
}

export async function createPub(name: string, email: string) {
  const pub = new Pub(name, await generatePubSlug(name), email, [])
  const result = await (await collections.pubs).insertOne(pub)
  if (!result) {
    throw Error('Failed to create pub.')
  }
  return pub
}

export async function getPub(slug: string): Promise<WithId<Pub> | null> {
  const query = { slug: slug }
  return await (await collections.pubs).findOne(query)
}

export async function addCustomer(
  pubId: ObjectId,
  customerId: ObjectId
): Promise<void> {
  const query = { _id: pubId }
  await (
    await collections.pubs
  ).updateOne(query, {
    $push: { customers: customerId },
  })
}

const generatePubSlug = async (name: string) => {
  return generateSlug(name, async (slug) => {
    const pub = await getPub(slug)
    return !pub
  })
}
