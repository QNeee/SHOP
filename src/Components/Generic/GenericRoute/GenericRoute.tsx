import { useEffect, useState, type FC, type ReactElement } from 'react';
import {
  BackContainer,
  GenericRouteContainer,
  GenericRouterWrapper,
} from './GenericRoute.styled';
import { ButtonBack } from './ButtonBack';
import { PathText } from './PathText';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemsPaths } from '../../../Helper';

interface IGenericRoute {
  children: ReactElement;
}
export const GenericRoute: FC<IGenericRoute> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [newPath, setNewPath] = useState('');
  useEffect(() => {
    const pathsArr = pathname.split('/').filter(Boolean);
    for (let i = 0; i < pathsArr.length; i++) {
      const pathItem = ItemsPaths[pathsArr[i] as keyof typeof ItemsPaths];
      pathsArr[i] = pathItem;
    }
    setNewPath(pathsArr.join(' / '));
  }, [pathname]);
  const MakeTitle = () => {
    const pathsArr = pathname.split('/').filter(Boolean);
    return ItemsPaths[pathsArr[pathsArr.length - 1] as keyof typeof ItemsPaths];
  };
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
  return (
    <GenericRouteContainer>
      <GenericRouterWrapper>
        <div>
          <PathText text={newPath} />
        </div>
        <BackContainer>
          <ButtonBack onClick={onClick} />
          <p>{MakeTitle()}</p>
        </BackContainer>
      </GenericRouterWrapper>
      {children}
      <GenericRouterWrapper></GenericRouterWrapper>
    </GenericRouteContainer>
  );
};
