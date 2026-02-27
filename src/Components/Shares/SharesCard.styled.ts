import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin-bottom: auto;
  margin-top: 20px;
`;
export const TextContainer = styled.div`
  width: 144px;
  height: 85px;
  margin-bottom: auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    line-height: 1.2;
    font-size: 14px;
  }
`;
export const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ButtonsContainer = styled.div<{ $available: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: auto;
  height: 32px;
  margin-top: 16px;
  p {
    font-size: 12px;
    color: ${({ $available }) => ($available ? 'green' : 'blue')};
  }
`;
export const SharesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const FavoriteContainer = styled.div`
  width: 35px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
`;
export const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const OldPrice = styled.p`
  position: relative;
  font-size: 14px;
  color: gray;
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
export const ChangeList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  li {
    width: 10px;
    height: 10px;
    border: 1px solid black;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;
