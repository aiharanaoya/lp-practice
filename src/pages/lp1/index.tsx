import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import style from './index.module.scss';

const LP1: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={style['lp1-body']}>
        <header className={style['profile-header']}>
          <h1 className={style['site-title']}>
            <a href="#" className={style['link']}>
              Profile
            </a>
          </h1>
          <nav className={style['site-nav']}>
            <ul className={style['list']}>
              <li className={style['nav-item']}>
                <a href="#" className={style['link']}>
                  About
                </a>
              </li>
              <li className={style['nav-item']}>
                <a href="#" className={style['link']}>
                  Bicycle
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className={style['main-visual']}>
            <Image
              src={'https://code-step.com/demo/html/profile/img/mainvisual.jpg'}
              alt={'テキストテキストテキスト'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <section className={style['about-section']}>
            <h2 className={style['title']}>About</h2>
          </section>
        </main>
      </div>
    </>
  );
};

export default LP1;
