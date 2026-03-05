import styled from 'styled-components';

export const SharesSection = styled.section`
  position: relative;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 19px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: #ccc;
  }

  &::after {
    bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 80px;
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
    margin-left: 0;
  }
`;
export const SharesTextContainer = styled.div`
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
