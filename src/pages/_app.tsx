import type { AppProps } from 'next/app'
import Layout from '@/pages/layout'
import { Inter } from 'next/font/google'
import '@/styles/global.css'

const inter = Inter({ weight: ['400', '500'], style: 'normal', subsets: ['cyrillic', 'latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <style jsx global>{`
          :root {
            --font-family-inter: ${inter.style.fontFamily};
          }

          #__next {
            height: 100%;
          }
        `}</style>
        <Component {...pageProps} />
      </>
    </Layout>
  )
}
