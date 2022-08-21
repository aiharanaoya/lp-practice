import type { NextPage } from 'next';
import Head from 'next/head';
import style from './index.module.scss';

const LP1: NextPage = () => {
  return (
    <>
      <Head>
        <title>LP1</title>
      </Head>
      <main className={style['main-content']}>
        <h1 className={style['main-header']}>LP1</h1>
      </main>
    </>
  );
};

export default LP1;
