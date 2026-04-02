import styled from 'styled-components';

export const CardContainer = styled.div<{ $active: boolean }>`
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid black;
  background-color: ${(props) => (props.$active ? 'orange' : 'white')};
  gap: 5px;
  cursor: pointer;
  img {
    padding: 7px;
    width: 30px;
    height: 28px;
  }
`;
export const CardNumberTextContainer = styled.div`
  padding: 7px;
  width: 44px;
  height: 16px;
`;
