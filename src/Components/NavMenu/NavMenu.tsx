import { BasketIcon, CatalogIcon, HomeIcon, ProfileIcon } from '../../assets/NavMenu/NavMenu';
import { Paths, useIsmobileWidth } from '../../Helper';
import { IconsUl, IconsUrl, Nav, UrlText } from './NavMenu.styled';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  const isMobile = useIsmobileWidth();

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
          <IconsUrl as={Link} to={Paths.basket}>
            <BasketIcon />
            <UrlText>Кошик</UrlText>
          </IconsUrl>
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
