import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin-bottom: auto;
  margin-top: 20px;
  position: relative;
  img {
    width: 144px;
    height: 158px;
    @media screen and (min-width: 768px) {
      width: 169px;
      height: 216px;
    }
  }
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
