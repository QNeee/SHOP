import styled from 'styled-components';

export const BaskerCardContainer = styled.div`
  width: 100%;
  outline: 1px solid black;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 24px;
    right: 24px;
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
  padding: 10px;
  width: 77px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 106px;
  }
`;
