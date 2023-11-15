import "@/styles/main.scss";
import Layout from "@/components/layout";
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src="https://cdn.reviewwave.com/js/chat_embed.js"
        strategy="lazyOnload"
        type="text/javascript"
        data-id="4b5e2fe976efbc"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
