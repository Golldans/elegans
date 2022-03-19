import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1 className='text-red-800'>
        Hello World
      </h1>
    </>
  )
}

export default MyApp
