import Link from 'next/link';
import { FC } from 'react';
import style from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={style['common-header']}>
      <Link href="/">
        <a className={style['header-link']}>LP Collection</a>
      </Link>
    </header>
  );
};
