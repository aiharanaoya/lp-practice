import { Header } from '@/components/common/Header';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
