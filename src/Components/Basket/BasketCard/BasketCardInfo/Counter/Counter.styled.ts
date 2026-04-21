import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 2px solid #8a2be2;
  overflow: hidden;
  width: 99px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const CounterButton = styled.button`
  color: gray;
  border: none;
  background: transparent;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #8a2be2;
  }
`;

export const CounterValue = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`;
