import styled from 'styled-components';

export const AddCardContainer = styled.div<{ $active: boolean; $showBorder: boolean | null }>`
  width: 154px;
  height: 53px;
  border-radius: 8px;
  border: 2px solid
    ${({ $active, $showBorder }) => ($active ? '#2563eb' : $showBorder ? 'red' : 'black')};
  background-color: ${({ $active }) => ($active ? 'orange' : 'white')};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  svg rect,
  svg path {
    transition: stroke 0.2s ease;
    stroke: ${({ $active }) => ($active ? '#2563eb' : '#454545')};
  }

  &:hover {
    border: 1px solid #2563eb;
  }

  &:hover svg rect,
  &:hover svg path {
    stroke: #2563eb;
  }
`;
