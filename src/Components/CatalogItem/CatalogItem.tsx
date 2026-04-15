import type { FC } from 'react';
import type { ProductItem } from '../../types';

import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import {
  CatalogItemContainer,
  CatalogItemContainerWrapper,
  CatalogItemInfoContainer,
  ImageContainer,
} from './CatalogItem.styled';
import { DiscountContainer } from '../Products/ProductCard.styled';

interface ICatalogItem {
  item: ProductItem;
}

export const CatalogItem: FC<ICatalogItem> = ({ item }) => {
  console.log(item.discount);
  return (
    <CatalogItemContainer>
      <CatalogItemContainerWrapper>
        <ImageContainer>
          <ImageGenericContainer title={item.title} itemPhotos={item.images} />
          {item.isDiscount ? (
            <DiscountContainer>Акція</DiscountContainer>
          ) : null}
        </ImageContainer>
        <CatalogItemInfoContainer>
          <h3>{item.title}</h3>
        </CatalogItemInfoContainer>
      </CatalogItemContainerWrapper>
    </CatalogItemContainer>
  );
};
