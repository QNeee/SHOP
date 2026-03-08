import styled from 'styled-components';

export const DeliverySelectorContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const RadioCard = styled.label<{ $active: boolean }>`
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid ${({ $active }) => ($active ? '#7c3aed' : '#ccc')};
  background: ${({ $active }) => ($active ? '#f3f0ff' : 'white')};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: #7c3aed;
  }
`;

export const HiddenRadio = styled.input`
  display: none;
`;
