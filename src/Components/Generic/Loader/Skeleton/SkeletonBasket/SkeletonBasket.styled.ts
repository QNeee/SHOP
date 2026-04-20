import styled from 'styled-components';
import { skeleton } from '../Skeleton.styled';

export const SkeletonBasketImageDiv = styled.div`
  height: 106px;
  width: 100%;
  ${skeleton};
`;
export const SkeletonContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
`;
export const SkeletinTitleAndCheckBoxDiv = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
`;
export const SkeletonBasketTitleDiv = styled.div`
  width: 80%;
  height: 100%;
  ${skeleton};
`;
export const SkeletonBasketCheckBoxDiv = styled.div`
  width: 10%;
  height: 100%;
  ${skeleton};
  margin-left: auto;
`;
export const SkeletonBasketPriceDiv = styled.div`
  margin-top: 24px;
  height: 20px;
  width: 60%;
  margin-right: auto;
  ${skeleton};
`;
export const SkeletonBasketIconsContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SkeletonBasketFavotiteIconContainer = styled.div`
  width: 15%;
  height: 100%;
  ${skeleton};
`;
export const SkeletonBasketTrasheIconContainer = styled.div`
  width: 15%;
  height: 100%;
  ${skeleton};
`;
export const SkeletonBasketCounterContainer = styled.div`
  width: 50%;
  height: 100%;
  ${skeleton};
`;
