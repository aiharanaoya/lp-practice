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
            <div className={style['profile']}>
              <div className={style['profile-image']}>
                <Image
                  src={'https://code-step.com/demo/html/profile/img/about.jpg'}
                  alt={'テキストテキストテキスト'}
                  layout={'fill'}
                />
              </div>
              <div className={style['profile-content']}>
                <h3 className={style['name']}>KAKERU MIYAICHI</h3>
                <p className={style['description']}>
                  テキストテキストテキストテキストテキストテキストテキスト
                  <br />
                  テキストテキストテキストテキストテキストテキストテキスト
                  <br />
                  テキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </section>
          <section className={style['bicycle-section']}>
            <h2 className={style['title']}>Bicycle</h2>
            <ul className={style['list']}>
              <li className={style['bicycle-content']}>
                <div className={style['image']}>
                  <Image
                    src={'https://code-step.com/demo/html/profile/img/bicycle1.jpg'}
                    alt={'テキストテキストテキスト'}
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
                <h3 className={style['title']}>タイトルタイトル</h3>
                <p className={style['description']}>テキストテキストテキスト</p>
              </li>
              <li className={style['bicycle-content']}>
                <div className={style['image']}>
                  <Image
                    src={'https://code-step.com/demo/html/profile/img/bicycle2.jpg'}
                    alt={'テキストテキストテキスト'}
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
                <h3 className={style['title']}>タイトルタイトル</h3>
                <p className={style['description']}>テキストテキストテキスト</p>
              </li>
              <li className={style['bicycle-content']}>
                <div className={style['image']}>
                  <Image
                    src={'https://code-step.com/demo/html/profile/img/bicycle3.jpg'}
                    alt={'テキストテキストテキスト'}
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
                <h3 className={style['title']}>タイトルタイトル</h3>
                <p className={style['description']}>テキストテキストテキスト</p>
              </li>
            </ul>
          </section>
        </main>
        <footer className={style['profile-footer']}>
          <p className={style['text']}>© 2022 Profile</p>
        </footer>
      </div>
    </>
  );
};

export default LP1;
