import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import IconBack from '@/assets/icons/back.svg';
import style from './Header.module.scss';

export const Header: FC = () => {
  const router = useRouter();

  if (router.pathname === '/') {
    return (
      <header className={style['home-header']}>
        <Link href="/">
          <a className={style['header-link']}>LP Collection</a>
        </Link>
      </header>
    );
  }

  return (
    <Link href="/">
      <div className={style['icon-link']}>
        <IconBack />
      </div>
    </Link>
  );
};
