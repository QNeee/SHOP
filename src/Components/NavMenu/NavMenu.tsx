import { BasketIcon, CatalogIcon, HomeIcon, ProfileIcon } from '../../assets/NavMenu/NavMenu';
import { IconsUl, IconsUrl, Nav, UrlText } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <Nav>
      <IconsUl>
        <li>
          <IconsUrl href="#home">
            <HomeIcon />
            <UrlText>Головна</UrlText>
          </IconsUrl>
        </li>
        <li>
          <IconsUrl href="#catalog">
            <CatalogIcon />
            <UrlText>Каталог</UrlText>
          </IconsUrl>
        </li>
        <li>
          <IconsUrl href="#basket">
            <BasketIcon />
            <UrlText>Кошик</UrlText>
          </IconsUrl>
        </li>
        <li>
          <IconsUrl href="#profile">
            <ProfileIcon />
            <UrlText>Профіль</UrlText>
          </IconsUrl>
        </li>
      </IconsUl>
    </Nav>
  );
};
