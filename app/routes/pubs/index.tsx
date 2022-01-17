import { Link, useLoaderData } from 'remix'
import Pub from '../../model/pub'
import { getPubs } from '../../service/pubService'
import { Layout } from '../../component/Layout'

export const loader = async () => {
  return await getPubs()
}

export default function Posts() {
  const pubs = useLoaderData() as Pub[]

  return (
    <Layout>
      <h1 className="text-3xl">Pubs</h1>
      <ul>
        {pubs.map((pub) => (
          <li key={pub.name}>
            <Link to={`/p/${pub.slug}`}>{pub.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
