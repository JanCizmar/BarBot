import { LoaderFunction, useLoaderData } from 'remix'
import { getPub } from '../../service/pubService'
import Pub from '../../model/pub'
import { Layout } from '../../component/Layout'

import { PubDetail } from '../../component/pub/PubDetail'

export const loader: LoaderFunction = async ({ params }) => {
  return await getPub((params as any).slug)
}

export default function SinglePub() {
  const pub = useLoaderData() as Pub

  return (
    <Layout>
      {pub ? <PubDetail pub={pub} /> : <h1 className="text-2xl">Not found!</h1>}
    </Layout>
  )
}
