import { useState, useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const [hours, setHours] = useState(new Date().getHours());

  useEffect(() => {
    setHours(new Date().getHours());
  }, [hours]);

  return (
    <Html lang="en" className={hours}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
