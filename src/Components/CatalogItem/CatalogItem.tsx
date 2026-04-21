import { useMemo, type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';

import {
  CatalogItemBorder,
  CatalogItemContainer,
  CatalogItemContainerWrapper,
  CatalogItemInfoContainer,
} from './CatalogItem.styled';
import { options } from '../../Helper';
import { CatalogItemImage } from './CatalogItemInfo/CatalogItemImage/CatalogItemImage';
import { CatalogItemOptions } from './CatalogItemInfo/CatalogItemOptions/CatalogItemOptions';
import { CatalogItemsCost } from './CatalogItemInfo/CatalogItemsCost/CatalogItemsCost';
import { CatalogItemButtons } from './CatalogItemInfo/CatalogitemButtons/CatalogItemButtons';
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
  const onClickCatalogItem = () => {
    // console.log(item.productId);
  };
  return (
    <CatalogItemBorder>
      <CatalogItemContainer>
        <CatalogItemContainerWrapper onClick={onClickCatalogItem}>
          <CatalogItemImage
            title={item.title}
            images={item.images}
            discountPercentage={item?.discountPercentage}
          />
          <CatalogItemInfoContainer>
            <h3>{item.title}</h3>
            <CatalogItemOptions optionsArr={optionsArr} />
            <CatalogItemsCost
              stock={item.stock}
              price={item.price}
              discountPercentage={item?.discountPercentage}
            />
          </CatalogItemInfoContainer>
        </CatalogItemContainerWrapper>
        <CatalogItemButtons
          onClickAdd={onClickAdd}
          item={item}
          isInFavorite={favorite[item.productVariantId] || 0}
          isAvailable={baket[item.productVariantId] != null}
        />
      </CatalogItemContainer>
    </CatalogItemBorder>
  );
};
