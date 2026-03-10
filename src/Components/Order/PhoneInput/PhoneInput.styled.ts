import { IMaskInput } from 'react-imask';
import styled from 'styled-components';

export const StyledIMaskInput = styled(IMaskInput)`
  width: 100%;
  height: 40px;
  margin-top: 10px;

  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 0 12px;

  font-size: 14px;
  background: white;
  box-sizing: border-box;

  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border: 1px solid #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.15);
  }

  &::placeholder {
    color: #999;
  }
`;
