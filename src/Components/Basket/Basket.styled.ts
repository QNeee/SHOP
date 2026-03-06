import styled from 'styled-components';
export const BasketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BasketButton = styled.div`
  width: 267px;
  height: 49px;
  color: white;
  background-color: blue;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
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
export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 2px solid #454545;
  cursor: pointer;
  appearance: none;
  accent-color: blue;
  position: relative;

  &:checked {
    border-color: blue;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid blue;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
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
