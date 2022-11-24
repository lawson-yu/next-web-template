import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { FC, ReactElement } from 'react';
import Layout from '../layouts';
import 'normalize.css';
import '../styles/global.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type IProps = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<IProps> = ({ Component, pageProps }) => {
  const getPageLayout = Component.getLayout ?? ((page) => page);

  return <Layout>{getPageLayout(<Component {...pageProps} />)}</Layout>;
};

export default App;
