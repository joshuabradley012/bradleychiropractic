import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script 
          src="https://cdn.reviewwave.com/js/chat_embed.js" 
          strategy="lazyOnload"
          type="text/javascript" 
          data-id="4b5e2fe976efbc"
        />
      </body>
    </Html>
  );
}
