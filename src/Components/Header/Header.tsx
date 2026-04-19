import {
  HeaderContainer,
  Logo,
  SearchContainer,
  SearchIcon,
  SearcInput,
} from './Header.styled';
import LogoImg from '../../assets/glance.png';
import SearchImg from '../../assets/icon_search.png';
import { useIsmobileWidth } from '../../Helper';
import { NavMenu } from '../NavMenu/NavMenu';
import type { LocalStorageItemShopCategory } from '../../types';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchValue } from '../../Redux/app/appSelectors';
import type { AppDispatch } from '../../Redux/store';
import { setSearchValue } from '../../Redux/app/appSlice';
interface IHeaderProps {
  items: LocalStorageItemShopCategory;
}
export const Header: FC<IHeaderProps> = ({ items }) => {
  const searchValue = useSelector(getSearchValue);
  const dispatch: AppDispatch = useDispatch();
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo" />
      <SearchContainer>
        <SearchIcon src={SearchImg} />
        <SearcInput
          type="text"
          placeholder="Пошук"
          onChange={(e) => dispatch(setSearchValue(e.currentTarget.value))}
          value={searchValue}
        />
      </SearchContainer>
      {!useIsmobileWidth() && <NavMenu items={items} />}
    </HeaderContainer>
  );
};
