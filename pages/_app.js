import '@/styles/globals.css';
import { Layout } from 'layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div id="modal"></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
