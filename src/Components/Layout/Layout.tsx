import type { FC } from 'react';
import { Paths, useIsmobileWidth } from '../../Helper';
import type { LocalStorageItemCategory } from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { useLocation } from 'react-router-dom';
interface ILayoutProps {
  items: LocalStorageItemCategory;
}
export const Layout: FC<ILayoutProps> = ({ items }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === Paths.base + '/' ? <Header items={items} /> : null}
      <Main />
      {useIsmobileWidth() ? <Footer items={items} /> : null}
    </>
  );
};
