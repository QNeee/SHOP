import type { FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShop,
  LocalStorageItemShopCategory,
} from '../../../types';
import { FavoriteIcon } from '../Icons/FavoriteIcon';
import { FavoriteContainer } from './FavoriteElem.styled';

export interface IFavoriteElem {
  onClick: (obj: LocalSorageObject) => void;
  categoryId: number;
  productVariantId: string;
  flag: number;
  localStorageObj: {
    id: string;
    elemId: keyof LocalStorageItemShop;
  };
}

export const FavoriteElem: FC<IFavoriteElem> = ({
  onClick,
  categoryId,
  productVariantId,
  flag,
  localStorageObj,
}) => {
  return (
    <FavoriteContainer
      onClick={() =>
        onClick({
          ...localStorageObj,
          type: 'favorites',
          itemType: categoryId as keyof LocalStorageItemShopCategory,
        })
      }
      id={productVariantId}
    >
      <FavoriteIcon flag={flag} />
    </FavoriteContainer>
  );
};
