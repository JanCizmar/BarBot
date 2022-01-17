import { LoaderFunction, redirect, useLoaderData } from 'remix'
import { getSession } from '../../../sessions'
import { Layout } from '../../../component/Layout'
import { getCustomer } from '../../../service/customerService'
import Customer from '../../../model/customer'
import { getPub } from '../../../service/pubService'
import Pub from '../../../model/pub'

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get('Cookie'))
  let customerId = session.get('customerId')
  const slug = (params as any).slug

  if (!customerId) {
    return redirect(`/p/${slug}`)
  }

  const customer = await getCustomer(customerId)
  const pub = await getPub(slug)

  if (!customer || !pub) {
    return new Response('Not found', { status: 404 })
  }

  return { customer, pub }
}

export default function OrderPage() {
  const { customer, pub } = useLoaderData() as { customer: Customer; pub: Pub }

  return (
    <Layout>
      <div className="w-full bg-white shadow-lg p-4">
        <div className="flex content-between justify-between">
          <a
            className="
            p-2 -m-2 hover:bg-gray-100 rounded-full text-center
            inline-flex items-center cursor-pointer text-gray-600"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
          <div className="text-xl text-gray-600">{pub.name}</div>
          <div className="text-gray-600">{customer.name}</div>
        </div>
      </div>
    </Layout>
  )
}
