import { useMemo, type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShop,
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
import { CatalogId, options } from '../../Helper';
import { Cost } from '../Products/Cost';
import { BasketButton } from '../Basket/Basket.styled';
import { FavoriteElem } from '../Generic/Favorite/FavoriteElem';
interface ICatalogItem {
  item: ProductItem;
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClick: (obj: LocalSorageObject) => void;
}

export const CatalogItem: FC<ICatalogItem> = ({
  item,
  favorite,
  baket,
  onClick,
}) => {
  const localStorageObj = {
    id: item.productVariantId,
    elemId: CatalogId as keyof LocalStorageItemShop,
  };
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
            onClick={onClick}
            categoryId={item.categoryId}
            productVariantId={item.productVariantId}
            flag={
              favorite[item.categoryId as keyof LocalStorageItemShopCategory][
                item.productVariantId
              ] || 0
            }
            localStorageObj={localStorageObj}
          />
          <BasketButton
            style={{ width: '143px' }}
            type="button"
            onClick={() => {
              onClick({
                ...localStorageObj,
                type: 'basket',
                itemType: item.categoryId as keyof LocalStorageItemShopCategory,
              });
            }}
          >
            {baket[item.categoryId as keyof LocalStorageItemShopCategory][
              item.productVariantId
            ]
              ? 'Видалити з кошику'
              : 'В кошик'}
          </BasketButton>
        </ButtonsContainer>
      </CatalogItemContainer>
    </CatalogItemBorder>
  );
};
