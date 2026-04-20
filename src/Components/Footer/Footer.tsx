import type { FC } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import { FooterContainer } from './Footer.styled';

interface IHeaderProps {}
export const Footer: FC<IHeaderProps> = () => {
  return (
    <FooterContainer>
      <NavMenu />
    </FooterContainer>
  );
};
