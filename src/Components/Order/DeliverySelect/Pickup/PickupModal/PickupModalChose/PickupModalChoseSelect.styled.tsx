import styled from "styled-components";

export const SelectDropdown = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  background-color: #222;
  border: 1px solid #444;
  border-radius: 8px;
  margin-top: 4px;
  z-index: 100;
`;
export const SelectItem = styled.li<{ $selected?: boolean }>`
  padding: 10px 14px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 12px;
  background-color: ${({ $selected }) => ($selected ? "#4cafef" : "transparent")};
  color: ${({ $selected }) => ($selected ? "#fff" : "#ccc")};
  &:hover {
    background-color: #4cafef;
    color: #fff;
  }
`;