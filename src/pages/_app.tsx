import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BriefingHome from './Briefing'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BriefingHome />
    </>
  )
}

export default MyApp
