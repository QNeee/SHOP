import styled from 'styled-components';

export const CostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    justify-content: space-arround;
  }
  align-items: center;
  width: 100%;
  height: 100%;
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
