import styled from 'styled-components';
import { skeleton } from '../Skeleton.styled';

export const SkeletonCatalogImageDiv = styled.div`
  width: 100px;
  height: 158px;
  @media screen and (min-width: 768px) {
    width: 169px;
    height: 216px;
  }
  ${skeleton};
`;

export const SkeletonCatalogTitleDiv = styled.div`
  height: 25px;
  width: 100%;
  ${skeleton};
`;
export const SkeletonCatalogInfoDiv = styled.div`
  margin-top: 15px;
  height: 100px;
  width: 100%;
  ${skeleton};
`;
export const SkeletonCatalogPriceDiv = styled.div`
  margin-top: 15px;
  height: 25px;
  width: 100%;
  ${skeleton};
`;
export const SkeletonButtonDiv = styled.div`
  width: 70%;
  height: 100%;
  ${skeleton};
`;
export const IconDiv = styled.div`
  height: 100%;
  width: 20%;
  ${skeleton};
`;
export const SkeletonButtonsWrapper = styled.div`
  margin-top: 15px;
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;
