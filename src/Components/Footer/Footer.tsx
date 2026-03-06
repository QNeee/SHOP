import type { FC } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import type { LocalStorageItemCategory } from '../../types';

interface IHeaderProps {
  items: LocalStorageItemCategory;
}
export const Footer: FC<IHeaderProps> = ({ items }) => {
  return (
    <footer>
      <NavMenu items={items} />
    </footer>
  );
};
