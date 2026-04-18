import { useMemo, type FC } from 'react';
import type { ProductItem, SharesItem } from '../../types';

import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import {
  CatalogItemBorder,
  CatalogItemContainer,
  CatalogItemContainerWrapper,
  CatalogItemCostAvailable,
  CatalogItemCostContainer,
  CatalogItemInfoContainer,
  CatalogItemInfoPContainer,
  ImageContainer,
} from './CatalogItem.styled';
import { DiscountContainer } from '../Products/ProductCard.styled';
import { options } from '../../Helper';
import { Cost } from '../Products/Cost';
import { BasketButton } from '../Basket/Basket.styled';

interface ICatalogItem {
  item: ProductItem;
  idx: number;
}

export const CatalogItem: FC<ICatalogItem> = ({ item, idx }) => {
  const optionsArr: string[] = useMemo(() => {
    const arr = [];
    for (const it in item.options) {
      const itemToArr = `${options[it as keyof typeof options]} : ${item.options[it]}`;
      arr.push(itemToArr);
    }
    return arr;
  }, [item]);
  const itemVariants = item.variants;
  const makeInStockTitle = () => {
    if (itemVariants[0].stock > 0) return 'В наявності';
    return 'Немає в наявності';
  };
  const onClickCataligItem = () => {
    // console.log(item.productId);
  };
  return (
    <CatalogItemBorder $idx={idx}>
      <CatalogItemContainer>
        <CatalogItemContainerWrapper onClick={onClickCataligItem}>
          <ImageContainer onClick={(e) => e.stopPropagation()}>
            <ImageGenericContainer
              title={item.productName}
              itemPhotos={item.images}
            />
            {itemVariants[0].discountPercent != null ? (
              <DiscountContainer>Акція</DiscountContainer>
            ) : null}
          </ImageContainer>
          <CatalogItemInfoContainer>
            <h3>{item.productName}</h3>
            <CatalogItemInfoPContainer>
              {optionsArr.map((it, index) => (
                <p key={index}>{it}</p>
              ))}
            </CatalogItemInfoPContainer>
            <CatalogItemCostContainer>
              <CatalogItemCostAvailable $inStock={itemVariants[0].stock > 0}>
                {makeInStockTitle()}
              </CatalogItemCostAvailable>
              <Cost
                itemPrice={itemVariants[0].price}
                itemDiscountPercentage={item.variants[0]?.discountPercent}
              />
            </CatalogItemCostContainer>
          </CatalogItemInfoContainer>
        </CatalogItemContainerWrapper>
      </CatalogItemContainer>
    </CatalogItemBorder>
  );
};
