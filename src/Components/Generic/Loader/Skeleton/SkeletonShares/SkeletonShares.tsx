import {
  ButtonsContainer,
  ImageContainer,
  ProductCardContainer,
  TextContainer,
} from '../../../../Products/ProductCard.styled';
import { SkeletonDiv } from '../Skeleton.styled';
import { SkeletonSharesImageDiv } from './SkeletonShares.styled';
export const SkeletonShares = () => {
  const itemsLength = 7;
  return (
    <>
      {Array.from({ length: itemsLength }).map((_, index) => (
        <ProductCardContainer key={index}>
          <ImageContainer>
            <SkeletonSharesImageDiv></SkeletonSharesImageDiv>
          </ImageContainer>
          <TextContainer>
            <SkeletonDiv></SkeletonDiv>
          </TextContainer>
          <ButtonsContainer $available={false}>
            <SkeletonDiv></SkeletonDiv>
          </ButtonsContainer>
        </ProductCardContainer>
      ))}
    </>
  );
};
