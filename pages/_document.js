import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ backgroundImage: "url('/background.jpg')" }} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}