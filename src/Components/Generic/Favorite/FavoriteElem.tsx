import type { FC } from 'react';
import type { LocalSorageObject, ProductItem } from '../../../types';
import { FavoriteIcon } from '../Icons/FavoriteIcon';
import { FavoriteContainer } from './FavoriteElem.styled';

export interface IFavoriteElem {
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  item: ProductItem;
  flag: number;
}

export const FavoriteElem: FC<IFavoriteElem> = ({ onClickAdd, flag, item }) => {
  return (
    <FavoriteContainer
      onClick={() =>
        onClickAdd(
          {
            type: 'favorites',
            itemId: item.productVariantId,
          },
          item,
        )
      }
    >
      <FavoriteIcon flag={flag} />
    </FavoriteContainer>
  );
};
