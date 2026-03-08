import styled from 'styled-components';

export const ChangeList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  li {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;
