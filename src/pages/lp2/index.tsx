import type { NextPage } from 'next';
import Head from 'next/head';
import style from './index.module.scss';

const LP2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={style['lp2-body']}></div>
    </>
  );
};

export default LP2;
