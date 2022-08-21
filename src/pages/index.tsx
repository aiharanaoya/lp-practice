import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import style from './index.module.scss';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>LP Collection</title>
      </Head>
      <main className={style['main-content']}>
        <ul className={style['link-list']}>
          <li className={style['item']}>
            <Link href="/lp1">
              <a>LP1</a>
            </Link>
          </li>
          <li className={style['item']}>
            <p>LP2</p>
          </li>
          <li className={style['item']}>
            <p>LP3</p>
          </li>
          <li className={style['item']}>
            <p>LP4</p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Index;
