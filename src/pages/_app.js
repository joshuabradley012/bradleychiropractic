import '@/styles/main.scss'
import 'react-dates/initialize';
import Layout from '@/components/layout';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App
