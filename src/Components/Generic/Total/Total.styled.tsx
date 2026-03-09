import styled from 'styled-components';

export const TotalText = styled.p`
  text-align: center;
`;
export const TotalContainer = styled.div`
  margin-top: 26px;
`;
export const TotalPrizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
