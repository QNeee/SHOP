import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin-bottom: auto;
  margin-top: 20px;
  position: relative;
`;
export const DiscountContainer = styled.div`
  width: 65px;
  height: 45px;
  position: absolute;
  top: 0;
  right: 0%;
  border-radius: 8px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextContainer = styled.div`
  width: 144px;
  height: 85px;
  margin-top: 16px;
`;
export const CostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    justify-content: space-arround;
  }
  align-items: center;
  width: 144px;
  height: 21px;
`;
export const ButtonsContainer = styled.div<{ $available: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: auto;
  height: 32px;
  width: 131px;
  margin-top: 16px;
  p {
    font-size: 12px;
    color: ${({ $available }) => ($available ? 'green' : 'blue')};
  }
`;
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const FavoriteContainer = styled.div`
  width: 35px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  cursor: pointer;
`;
export const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const OldPrice = styled.p`
  position: relative;
  font-size: 14px;
  color: gray;
  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: gray;
  }
`;
