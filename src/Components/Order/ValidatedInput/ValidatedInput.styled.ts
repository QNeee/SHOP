import styled from 'styled-components';


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
