import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
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
        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WC98VR4');
      `}
        </Script>
        <Component {...pageProps} />
      </>
    </Layout>
  )
}
