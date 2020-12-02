import Head from 'next/head';
import { ReactElement } from 'react';

function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl">Index page </h1>
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default Home;
