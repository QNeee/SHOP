import type { FC } from 'react';
import type { LocalSorageObject, ProductItem } from '../../../../types';
import { BasketButton } from '../../../Basket/Basket.styled';
import { FavoriteElem } from '../../../Generic/Favorite/FavoriteElem';
import { ButtonsContainer } from './CatalogItemButtons.styled';
interface ICatalogItemButtons {
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  item: ProductItem;
  isInFavorite: number;
  isAvailable: boolean;
}
export const CatalogItemButtons: FC<ICatalogItemButtons> = ({
  item,
  onClickAdd,
  isInFavorite,
  isAvailable,
}) => {
  return (
    <ButtonsContainer>
      <FavoriteElem onClickAdd={onClickAdd} item={item} flag={isInFavorite} />
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
        {isAvailable ? 'Видалити з кошику' : 'В кошик'}
      </BasketButton>
    </ButtonsContainer>
  );
};
