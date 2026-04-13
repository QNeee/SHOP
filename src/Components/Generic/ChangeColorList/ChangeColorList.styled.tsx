import styled from 'styled-components';

export const ChangeList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
`;
export const ChangeListItem = styled.li<{
  $active: boolean;
  $backColor: string;
}>`
  width: 20px;
  height: 20px;
  border: ${({ $active }) => ($active ? '2px solid red' : '1px solid white')};
  background-color: ${({ $backColor }) => $backColor};
  border-radius: 50%;
  cursor: pointer;
`;
