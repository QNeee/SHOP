import { useMemo, type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';

import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import {
  ButtonsContainer,
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
import { FavoriteElem } from '../Generic/Favorite/FavoriteElem';
interface ICatalogItem {
  item: ProductItem;
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
}

export const CatalogItem: FC<ICatalogItem> = ({
  item,
  favorite,
  baket,
  onClickAdd,
}) => {
  const optionsArr: string[] = useMemo(() => {
    const arr = [];
    for (const it in item.options) {
      const itemToArr = `${options[it as keyof typeof options]} : ${item.options[it]}`;
      arr.push(itemToArr);
    }
    return arr;
  }, [item]);
  const makeInStockTitle = () => {
    if (item.stock > 0) return 'В наявності';
    return 'Немає в наявності';
  };
  const onClickCataligItem = () => {
    // console.log(item.productId);
  };
  return (
    <CatalogItemBorder>
      <CatalogItemContainer>
        <CatalogItemContainerWrapper onClick={onClickCataligItem}>
          <ImageContainer onClick={(e) => e.stopPropagation()}>
            <ImageGenericContainer
              title={item.title}
              itemPhotos={item.images}
            />
            {item?.discountPercentage != null ? (
              <DiscountContainer>-{item.discountPercentage}%</DiscountContainer>
            ) : null}
          </ImageContainer>
          <CatalogItemInfoContainer>
            <h3>{item.title}</h3>
            <CatalogItemInfoPContainer>
              {optionsArr.map((it, index) => (
                <p key={index}>{it}</p>
              ))}
            </CatalogItemInfoPContainer>
            <CatalogItemCostContainer>
              <CatalogItemCostAvailable $inStock={item.stock > 0}>
                {makeInStockTitle()}
              </CatalogItemCostAvailable>
              <Cost
                itemPrice={item.price}
                itemDiscountPercentage={item?.discountPercentage}
              />
            </CatalogItemCostContainer>
          </CatalogItemInfoContainer>
        </CatalogItemContainerWrapper>
        <ButtonsContainer>
          <FavoriteElem
            onClickAdd={onClickAdd}
            item={item}
            flag={favorite[item.productVariantId] || 0}
          />
          <BasketButton
            style={{ width: '143px' }}
            type="button"
            onClick={() => {
              onClickAdd(
                {
                  type: 'basket',
                  itemId: item.productVariantId,
                },
                item,
              );
            }}
          >
            {baket[item.productVariantId] ? 'Видалити з кошику' : 'В кошик'}
          </BasketButton>
        </ButtonsContainer>
      </CatalogItemContainer>
    </CatalogItemBorder>
  );
};
