import { FC } from 'react'
import { Link } from 'remix'

export const Layout: FC = (props) => {
  return (
    <div className="px-2 min-h-screen flex-col flex flex-1 items-center">
      <div className="max-w-lg flex-auto w-full mt-4 flex flex-col">
        {/*<div className="mt-4">*/}
        {/*  <h1 className="font-serif text-xl">BarBot</h1>*/}
        {/*</div>*/}
        {props.children}
      </div>
      <div className="flex">
        <div className="mx-auto p-4">
          <Link to="/pubs/new" className="text-blue-800 text-sm">
            Add new pub
          </Link>
        </div>
      </div>
    </div>
  )
}
