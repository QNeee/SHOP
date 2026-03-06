import { useEffect, type FC } from 'react';
import { BasketIcon, CatalogIcon, HomeIcon, ProfileIcon } from '../../assets/NavMenu/NavMenu';
import { Paths, useIsmobileWidth } from '../../Helper';
import {
  BaketCountContainer,
  CountContainer,
  IconsUl,
  IconsUrl,
  Nav,
  UrlText,
} from './NavMenu.styled';
import { Link } from 'react-router-dom';
import type { LocalStorageItemCategory } from '../../types';
interface INavMenuProps {
  items: LocalStorageItemCategory;
}
export const NavMenu: FC<INavMenuProps> = ({ items }) => {
  const isMobile = useIsmobileWidth();
  useEffect(() => {
    for (const obj in items) {
      const item = items[obj as keyof LocalStorageItemCategory];
      const count = Object.values(item).length;
      const el = document.getElementById('count');
      if (el) {
        el.style.opacity = count === 0 ? '0' : '1';
        el.textContent = count === 0 ? '' : count.toString();
      }
    }
  }, [items]);
  return (
    <Nav>
      <IconsUl>
        {isMobile ? (
          <li>
            <IconsUrl as={Link} to={Paths.base}>
              <HomeIcon />
              <UrlText>Головна</UrlText>
            </IconsUrl>
          </li>
        ) : null}

        <li>
          <IconsUrl as={Link} to={Paths.catalog}>
            <CatalogIcon />
            <UrlText>Каталог</UrlText>
          </IconsUrl>
        </li>
        <li>
          <BaketCountContainer>
            <CountContainer id="count"></CountContainer>
            <IconsUrl as={Link} to={Paths.basket}>
              <BasketIcon />
              <UrlText>Кошик</UrlText>
            </IconsUrl>
          </BaketCountContainer>
        </li>
        <li>
          <IconsUrl as={Link} to={Paths.profile}>
            <ProfileIcon />
            <UrlText>Профіль</UrlText>
          </IconsUrl>
        </li>
      </IconsUl>
    </Nav>
  );
};
