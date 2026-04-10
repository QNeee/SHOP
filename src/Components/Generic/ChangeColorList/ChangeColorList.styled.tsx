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
  width: 15px;
  height: 15px;
  border: ${(props) => (props.$active ? '2px solid black' : '1px solid white')};
  background-color: ${({ $active, $backColor }) =>
    $active ? $backColor : 'white'};
  border-radius: 50%;
  cursor: pointer;
`;
