import Pub from '../../model/pub'
import { FC, useEffect, useRef } from 'react'
import QrCode from 'qrcode'
import { Layout } from '../Layout'

export const PubDetail: FC<{ pub: Pub }> = ({ pub }) => {
  const canvasRef = useRef<any>()
  let url = ''
  if (typeof window != 'undefined') {
    url = `${window.location.origin}/p/${pub.slug}`
  }
  useEffect(() => {
    if (canvasRef.current) {
      QrCode.toCanvas(canvasRef.current, url, {
        width: 400,
        margin: 0,
        color: { dark: '#ffffff', light: '#4f4f4f' },
      })
    }
  }, [canvasRef.current])

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="text-2xl">{pub.name}</h1>
          <p>
            <a className="text-blue-900 text-sm" href={url}>
              {url}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <canvas className="w-full" ref={canvasRef} />
      </div>
    </Layout>
  )
}
