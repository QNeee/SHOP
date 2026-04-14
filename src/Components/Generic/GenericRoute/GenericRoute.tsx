import { type FC, type ReactElement } from 'react';
import {
  BackContainer,
  GenericRouteContainer,
  GenericRouterWrapper,
} from './GenericRoute.styled';
import { ButtonBack } from './ButtonBack';
import { PathText } from './PathText';
import { useLocation, useNavigate } from 'react-router-dom';
import { localStorageItemsKeys, Paths } from '../../../Helper';

interface IGenericRoute {
  path: string;
  title: string;
  children: ReactElement;
}
export const GenericRoute: FC<IGenericRoute> = ({ path, title, children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onClick = () => {
    const pages = pathname.split('/');
    const needPages = [...pages].filter(Boolean);
    let backPath = '/';
    needPages.pop();
    needPages.forEach((item) => {
      backPath += item + '/';
    });
    navigate(backPath);
  };
  const getCatalogPath = () => {
    const pathArr = path.split('/');
    const localPath = localStorage.getItem(localStorageItemsKeys.catalogPath);
    const isPathRefreshed = pathArr[pathArr.length - 1] === ' ';
    if (isPathRefreshed) return path + localPath;
    else return path;
  };
  return (
    <GenericRouteContainer>
      <GenericRouterWrapper>
        <div>
          <PathText
            text={pathname.includes(Paths.catalog) ? getCatalogPath() : path}
          />
        </div>
        <BackContainer>
          <ButtonBack onClick={onClick} />
          <p>{title}</p>
        </BackContainer>
      </GenericRouterWrapper>
      {children}
      <GenericRouterWrapper></GenericRouterWrapper>
    </GenericRouteContainer>
  );
};
