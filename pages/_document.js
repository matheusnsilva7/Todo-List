import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ backgroundImage: "url('/background2.jpg')" }} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}