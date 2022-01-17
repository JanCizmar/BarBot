import { ObjectId } from 'mongodb'

export default class Pub {
  constructor(
    public name: string,
    public slug: string,
    public email: string,
    public customers: ObjectId[]
  ) {}
}
