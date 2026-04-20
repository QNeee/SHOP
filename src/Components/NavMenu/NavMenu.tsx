import { type FC } from 'react';
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
import {
  BasketIcon,
  CatalogIcon,
  HomeIcon,
  ProfileIcon,
} from '../Generic/Icons/NavMenuIcons';
import { useSelector } from 'react-redux';
import {
  getBasketLoading,
  getProductsBasketItems,
} from '../../Redux/products/productsSelectors';
import { Loader } from '../Generic/Loader/Loader';
interface INavMenuProps {}
export const NavMenu: FC<INavMenuProps> = ({}) => {
  const isMobile = useIsmobileWidth();
  const count = useSelector(getProductsBasketItems).length;
  const loading = useSelector(getBasketLoading);
  return (
    <Nav>
      <IconsUl>
        {isMobile ? (
          <li>
            <IconsUrl as={Link} to={Paths.base + '/'}>
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
            <CountContainer $count={count}>
              {count > 0 ? <p>{count}</p> : null}
            </CountContainer>
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
