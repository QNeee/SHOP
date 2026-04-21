import styled from 'styled-components';

export const BasketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;
export const BasketIconContainer = styled.div<{ $checked: boolean }>`
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: ${(props) => (props.$checked ? 1 : 0)};
  cursor: pointer;
  &:hover svg {
    color: blue;
    fill: blue;
    stroke: blue;
  }
`;
export const BasketIconText = styled.p`
  margin-left: 12px;
  color: #666666;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 17px;
`;
