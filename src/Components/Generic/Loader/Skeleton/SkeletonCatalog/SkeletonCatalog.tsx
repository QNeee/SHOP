import type { FC } from 'react';
import {
  ButtonsContainer,
  CatalogItemBorder,
  CatalogItemContainer,
  CatalogItemContainerWrapper,
  CatalogItemInfoContainer,
} from '../../../../CatalogItem/CatalogItem.styled';
import { ImageContainer } from '../../../../Products/ProductCard.styled';
import {
  IconDiv,
  SkeletonButtonDiv,
  SkeletonButtonsWrapper,
  SkeletonCatalogImageDiv,
  SkeletonCatalogInfoDiv,
  SkeletonCatalogPriceDiv,
  SkeletonCatalogTitleDiv,
} from './SkeletonCatalog.styled';

interface ISkeletonCatalog {
  itemsPerPage: number;
}

export const SkeletonCatalog: FC<ISkeletonCatalog> = ({ itemsPerPage }) => {
  return (
    <>
      {Array.from({ length: itemsPerPage }).map((_, index) => (
        <CatalogItemBorder key={index}>
          <CatalogItemContainer>
            <CatalogItemContainerWrapper>
              <ImageContainer>
                <SkeletonCatalogImageDiv></SkeletonCatalogImageDiv>
              </ImageContainer>
              <CatalogItemInfoContainer>
                <SkeletonCatalogTitleDiv></SkeletonCatalogTitleDiv>
                <SkeletonCatalogInfoDiv></SkeletonCatalogInfoDiv>
                <SkeletonCatalogPriceDiv></SkeletonCatalogPriceDiv>
              </CatalogItemInfoContainer>
            </CatalogItemContainerWrapper>
            <SkeletonButtonsWrapper>
              <IconDiv></IconDiv>
              <SkeletonButtonDiv></SkeletonButtonDiv>
            </SkeletonButtonsWrapper>
          </CatalogItemContainer>
        </CatalogItemBorder>
      ))}
    </>
  );
};
