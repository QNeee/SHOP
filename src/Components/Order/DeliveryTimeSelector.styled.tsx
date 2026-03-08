import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: sans-serif;
  padding: 0 17px;
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #2563eb;
  }
`;

export const SelectedText = styled.span`
  font-size: 14px;
  color: #0c0c0c;
`;

export const Arrow = styled.span`
  font-size: 16px;
  transition: transform 0.2s ease;
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  margin-top: 6px;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.04);

  overflow: hidden;

  z-index: 10;
`;

export const Option = styled.div`
  padding: 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: #f0f8ff;
  }
`;
