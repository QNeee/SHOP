import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const gradientSpin = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoaderCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #0077ff;
  border-left-color: #00cfff;
  animation: ${spin} 1s linear infinite;

  background: linear-gradient(270deg, #0077ff, #00cfff, #00ffcc, #0077ff);
  background-size: 600% 600%;
  animation:
    ${spin} 1s linear infinite,
    ${gradientSpin} 3s ease infinite;
`;
