import type { FC } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import type { LocalStorageItemShopCategory } from '../../types';
import { FooterContainer } from './Footer.styled';

interface IHeaderProps {
  items: LocalStorageItemShopCategory;
}
export const Footer: FC<IHeaderProps> = ({ items }) => {
  return (
    <FooterContainer>
      <NavMenu items={items} />
    </FooterContainer>
  );
};
