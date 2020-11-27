import Head from 'next/head';
import { ReactElement } from 'react';

import styles from '@/styles/Home.module.css';

function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default Home;
