import type { FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShop,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../../types';
import { FavoriteIcon } from '../Icons/FavoriteIcon';
import { FavoriteContainer } from './FavoriteElem.styled';

export interface IFavoriteElem {
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  item: ProductItem;
  flag: number;
  localStorageObj: {
    id: string;
    elemId: keyof LocalStorageItemShop;
  };
}

export const FavoriteElem: FC<IFavoriteElem> = ({
  onClickAdd,
  flag,
  localStorageObj,
  item,
}) => {
  return (
    <FavoriteContainer
      onClick={() =>
        onClickAdd(
          {
            ...localStorageObj,
            type: 'favorites',
            itemType: item.categoryId as keyof LocalStorageItemShopCategory,
          },
          item,
        )
      }
    >
      <FavoriteIcon flag={flag} />
    </FavoriteContainer>
  );
};
