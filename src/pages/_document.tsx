import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ru'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC98VR4" height="0" width="0" style="display:none;visibility:hidden">`
          }}
        />
      </body>
    </Html>
  )
}
