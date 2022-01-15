import { useLoaderData } from 'remix'
import Pub from '../../model/pub'
import { getPubs } from '../../service/pubService'

export const loader = async () => {
  return await getPubs()
}

export default function Posts() {
  const pubs = useLoaderData() as Pub[]

  return (
    <div>
      <h1 className="text-3xl p-6">Pubs</h1>
      <ul>
        {pubs.map((pub) => (
          <li key={pub.name}>{pub.name}</li>
        ))}
      </ul>
    </div>
  )
}
