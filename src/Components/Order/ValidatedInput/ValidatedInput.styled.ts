import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 0 35px 0 12px;

  font-size: 14px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const Icon = styled.div<{ $valid: boolean | null }>`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  color: ${(p) => (p.$valid ? '#27ae60' : '#e74c3c')};
`;
