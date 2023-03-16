import type { AppProps } from 'next/app'
import Head from 'next/head'
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
        <Head>
          <link rel='icon' href='/favicons/favicon.ico' sizes='any' />
          <link rel='icon' href='/favicons/favicon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' />
        </Head>
        <Component {...pageProps} />
      </>
    </Layout>
  )
}
