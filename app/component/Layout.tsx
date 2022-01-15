import { Link } from 'remix'
import { FC } from 'react'

export const Layout: FC = (props) => {
  return (
    <div className="mx-auto max-w-lg">
      <div className="flex gap-10 my-4 p-2 rounded shadow-lg font-light bg-white">
        <Link to="/pubs">Pubs</Link>
        <Link to="/pubs/new">New Pub</Link>
      </div>
      {props.children}
    </div>
  )
}
