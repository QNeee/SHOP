import type { FC } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import type { LocalStorageItemShopCategory } from '../../types';

interface IHeaderProps {
  items: LocalStorageItemShopCategory;
}
export const Footer: FC<IHeaderProps> = ({ items }) => {
  return (
    <footer>
      <NavMenu items={items} />
    </footer>
  );
};
