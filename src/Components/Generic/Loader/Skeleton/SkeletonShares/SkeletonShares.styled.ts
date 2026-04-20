import styled from 'styled-components';
import { skeleton } from '../Skeleton.styled';

export const SkeletonSharesImageDiv = styled.div`
  width: 144px;
  height: 158px;
  @media screen and (min-width: 768px) {
    width: 169px;
    height: 216px;
  }
  ${skeleton};
`;
