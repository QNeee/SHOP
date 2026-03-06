import { type FC, type ReactElement } from 'react';
import { BackContainer, GenericRouteContainer } from './GenericRoute.styled';
import { ButtonBack } from './ButtonBack';
import { PathText } from './PathText';
import { useLocation, useNavigate } from 'react-router-dom';

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
    const prevPage = pages[pages.length - 2];
    navigate('/' + prevPage + '/');
  };

  return (
    <GenericRouteContainer>
      <div>
        <PathText text={path} />
      </div>
      <BackContainer>
        <ButtonBack onClick={onClick} />
        <p>{title}</p>
      </BackContainer>
      {children}
    </GenericRouteContainer>
  );
};
