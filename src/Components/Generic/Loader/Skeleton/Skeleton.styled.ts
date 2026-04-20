import styled from 'styled-components';
import { css, keyframes } from 'styled-components';
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;
export const skeleton = css`
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s infinite;
  border-radius: 8px;
`;

export const SkeletonDiv = styled.div`
  width: 100%;
  height: 100%;
  ${skeleton};
`;
