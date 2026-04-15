import { useMemo, type FC } from 'react';
import type { ProductItem } from '../../types';

import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import {
  CatalogItemContainer,
  CatalogItemContainerWrapper,
  CatalogItemInfoContainer,
  CatalogItemInfoPContainer,
  ImageContainer,
} from './CatalogItem.styled';
import { DiscountContainer } from '../Products/ProductCard.styled';
import { options } from '../../Helper';

interface ICatalogItem {
  item: ProductItem;
}

export const CatalogItem: FC<ICatalogItem> = ({ item }) => {
  const optionsArr: string[] = useMemo(() => {
    const arr = [];
    for (const it in item.options) {
      const itemToArr = `${options[it as keyof typeof options]} : ${item.options[it]}`;
      arr.push(itemToArr);
    }
    return arr;
  }, [item]);
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
          <CatalogItemInfoPContainer>
            {optionsArr.map((it, index) => (
              <p key={index}>{it}</p>
            ))}
          </CatalogItemInfoPContainer>
          {/* <Cost
            itemPrice={item.price}
            itemDiscountPercentage={item.discount?.percentage}
          /> */}
        </CatalogItemInfoContainer>
      </CatalogItemContainerWrapper>
    </CatalogItemContainer>
  );
};
