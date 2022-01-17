import slug from 'slug'

export default async (
  string: string,
  isUniqueFn: (string: string) => Promise<boolean>
): Promise<string> => {
  let randomPart = ''
  for (let i = 0; i < 10000; i++) {
    const result = slug(string) + randomPart
    if (await isUniqueFn(result)) {
      return result
    }
    randomPart = Math.ceil(Math.random() * 10000).toString()
  }
  throw Error('Cannot generate slug')
}
