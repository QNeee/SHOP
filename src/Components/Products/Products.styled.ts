import styled from 'styled-components';
import { Paths } from '../../Helper';

export const ProductSection = styled.section<{ $pathname: string }>`
  position: relative;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 19px;
  margin-top: 40px;

  @media screen and (min-width: 1280px) {
    padding: ${(props) =>
      props.$pathname === Paths.base + '/' ? '0 80px' : '0'};
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    &::before,
    &::after {
      left: 80px;
      right: 80px;
    }
  }
`;
export const ProductText = styled.h2`
  margin-left: 16px;
  @media screen and (min-width: 1280px) {
    margin-left: 0;
  }
`;
export const ProductTextContainer = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: #ccc;
  }
`;
