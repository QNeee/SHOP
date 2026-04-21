import type { FC } from 'react';
import {
  BaskerCardContainer,
  ImageContainer,
} from '../../../../Basket/BasketCard/BasketCard.styled';
import {
  SkeletonBasketImageDiv,
  SkeletonBasketTitleDiv,
  SkeletonBasketCheckBoxDiv,
  SkeletonContainer,
  SkeletinTitleAndCheckBoxDiv,
  SkeletonBasketPriceDiv,
  SkeletonBasketIconsContainer,
  SkeletonBasketTrasheIconContainer,
  SkeletonBasketFavotiteIconContainer,
  SkeletonBasketCounterContainer,
} from './SkeletonBasket.styled';
import { BasketWrapper } from '../../../../Basket/Basket.styled';

interface IskeletonBasket {
  itemsPerPage: number;
}

export const SkeletonBasket: FC<IskeletonBasket> = ({ itemsPerPage }) => {
  return (
    <>
      {Array.from({ length: itemsPerPage }).map((_, index) => (
        <BasketWrapper key={index}>
          <BaskerCardContainer>
            <ImageContainer>
              <SkeletonBasketImageDiv></SkeletonBasketImageDiv>
            </ImageContainer>
            <SkeletonContainer>
              <SkeletinTitleAndCheckBoxDiv>
                <SkeletonBasketTitleDiv></SkeletonBasketTitleDiv>
                <SkeletonBasketCheckBoxDiv></SkeletonBasketCheckBoxDiv>
              </SkeletinTitleAndCheckBoxDiv>
              <SkeletonBasketPriceDiv></SkeletonBasketPriceDiv>
              <SkeletonBasketIconsContainer>
                <SkeletonBasketFavotiteIconContainer></SkeletonBasketFavotiteIconContainer>
                <SkeletonBasketTrasheIconContainer></SkeletonBasketTrasheIconContainer>
                <SkeletonBasketCounterContainer></SkeletonBasketCounterContainer>
              </SkeletonBasketIconsContainer>
            </SkeletonContainer>
          </BaskerCardContainer>
        </BasketWrapper>
      ))}
    </>
  );
};
