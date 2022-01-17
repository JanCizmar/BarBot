import { Layout } from '../component/Layout'

export default function Index() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col h-full justify-center">
        <h1 className="text-3xl text-gray-400 font-light pb-4">Welcome.</h1>
        <h1 className="text-3xl text-gray-400 font-light pb-4">I am BarBot.</h1>
        <h1 className="text-2xl text-gray-400 font-light pb-4">
          Scan a Pub's QR code to continue or create new pub.
        </h1>
      </div>
    </Layout>
  )
}
