import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  )
}

export default appWithTranslation(App)
