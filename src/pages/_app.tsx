import type { AppProps } from 'next/app';
import '@/assets/styles/globals.scss';
import { Layout } from '@/layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
