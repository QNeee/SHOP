import { HeaderContainer, Logo, SearchContainer, SearchIcon, SearcInput } from './Header.styled';
import LogoImg from '../../assets/glance.png';
import SearchImg from '../../assets/icon_search.png';
import { useIsmobileWidth } from '../../Helper';
import { NavMenu } from '../NavMenu/NavMenu';
import type { LocalStorageItemShopCategory } from '../../types';
import type { FC } from 'react';
interface IHeaderProps {
  items: LocalStorageItemShopCategory;
}
export const Header: FC<IHeaderProps> = ({ items }) => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo" />
      <SearchContainer>
        <SearchIcon src={SearchImg} />
        <SearcInput type="text" placeholder="Пошук" />
      </SearchContainer>
      {!useIsmobileWidth() && <NavMenu items={items} />}
    </HeaderContainer>
  );
};
