import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
} from 'remix'
import { addCustomer, getPub } from '../../../service/pubService'
import Pub from '../../../model/pub'
import { Layout } from '../../../component/Layout'
import { PubEnter } from '../../../component/pub/PubEnter'
import { commitSession, getSession } from '../../../sessions'
import { createCustomer } from '../../../service/customerService'

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const form = await request.formData()
  const name = form.get('name')
  const slug = (params as any).slug
  const pub = await getPub(slug)
  const errors: Record<string, string> = {}

  if (!name) {
    errors.name = 'name_not_provided'
  }

  if (Object.keys(errors).length) {
    return json(errors, { status: 422 })
  }

  if (!pub) {
    throw new Response('Pub not Found', {
      status: 404,
    })
  }

  let customerId = session.get('customerId')
  if (!customerId) {
    customerId = await createCustomer(name as string)
    session.set('customerId', customerId)
  }

  pub.customers = pub.customers || []
  pub.customers.push(customerId)
  await addCustomer(pub._id, customerId)

  return redirect(`/p/${slug}/order`, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const loader: LoaderFunction = async ({ params }) => {
  return await getPub((params as any).slug)
}

export default function SinglePub() {
  const pub = useLoaderData() as Pub
  const errors = useActionData()

  return (
    <Layout>
      {pub ? (
        <PubEnter pub={pub} errors={errors} />
      ) : (
        <h1 className="text-2xl">Not found!</h1>
      )}
    </Layout>
  )
}
