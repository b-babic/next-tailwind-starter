import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
