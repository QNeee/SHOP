import type { FC } from 'react';
import { useIsmobileWidth } from '../../Helper';
import type { LocalStorageItemCategory } from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
interface ILayoutProps {
  items: LocalStorageItemCategory;
}
export const Layout: FC<ILayoutProps> = ({ items }) => {
  return (
    <>
      <Header items={items} />
      <Main />
      {useIsmobileWidth() ? <Footer items={items} /> : null}
    </>
  );
};
