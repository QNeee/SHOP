import styled from 'styled-components';

export const SharesSection = styled.section`
  position: relative;
  padding-bottom: 19px;
  @media screen and (min-width: 1280px) {
    padding: 0 80px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: #ccc;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
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
export const SharesText = styled.h2`
  margin-left: 16px;
  @media screen and (min-width: 1280px) {
    margin-left: 80px;
  }
`;
