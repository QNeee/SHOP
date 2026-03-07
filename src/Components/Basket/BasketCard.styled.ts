import styled from 'styled-components';

export const BaskerCardContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: #e0e0e0;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;
export const ImageContainer = styled.div`
  width: 77px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 16px;
  img {
    height: 106px;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const InfoPriceContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 24px;
  p {
    margin: 0;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 12px;
  height: 23px;
  width: 144px;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  margin-top: auto;
  @media (min-width: 768px) {
    width: 100px;
  }

  @media (min-width: 1280px) {
    width: 140px;
  }
  svg {
    height: 100%;
    &:hover {
      color: blue;
      fill: blue;
      stroke: blue;
    }
    &:nth-child(2) {
      margin-left: auto;
    }
  }
`;
export const IconAndCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  padding-left: 24px;
  height: 33px;
  margin-bottom: 23px;
`;
