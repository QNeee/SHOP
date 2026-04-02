import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  height: 90px;
  margin-top: 10px;

  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 10px;

  font-size: 14px;
  resize: none;

  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.15);
  }
`;
