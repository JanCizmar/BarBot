import Pub from '../../model/pub'
import { FC } from 'react'
import { Form } from 'remix'

export const PubEnter: FC<{ pub: Pub; errors: Record<string, string> }> = ({
  pub,
  errors,
}) => {
  return (
    <>
      <Form
        method="post"
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mt-8"
      >
        <h1 className="text-2xl">{pub.name}</h1>
        <p className="mt-4 mb-4 text-gray-400">
          Enter your name to start ordering...
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
          <p className="pt-4 text-red-400 text-sm">{errors?.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enter
          </button>
        </div>
      </Form>
    </>
  )
}
