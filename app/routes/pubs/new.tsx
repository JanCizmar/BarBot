import { Form, redirect } from 'remix'
import { createPub } from '../../service/pubService'
import { Layout } from '../../component/Layout'

export const action = async ({ request }: any) => {
  const formData = await request.formData()
  const name = formData.get('name')
  await createPub({ name })
  return redirect('/pubs')
}

export default function NewPost() {
  return (
    <Layout>
      <Form method="post">
        <p>
          <label>
            Pub name:{' '}
            <input
              className="rounded-lg border-transparent flex-1 appearance-none
               border border-gray-300 w-full py-2 px-4 bg-white text-gray-700
                placeholder-gray-400 shadow-sm text-base focus:outline-none
                 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              name="name"
            />
          </label>
        </p>
        <p>
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500
             focus:ring-offset-indigo-200 text-white w-full
             transition ease-in duration-200 text-center
             text-base font-semibold shadow-md
             focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Create Pub
          </button>
        </p>
      </Form>
    </Layout>
  )
}
