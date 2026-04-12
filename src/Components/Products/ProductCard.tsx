import { type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShop,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import {
  ButtonsContainer,
  CostContainer,
  DiscountContainer,
  FavoriteContainer,
  ImageContainer,
  OldPrice,
  Price,
  ProductCardContainer,
  TextContainer,
} from './ProductCard.styled';
import { Button } from '../Generic/GenericCarousel/GenericCarousel.styled';
import { FavoriteIcon } from '../Generic/Icons/FavoriteIcon';
import { discountCalculate, valute } from '../../Helper';
import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
interface IProductCardProps {
  item: ProductItem;
  onClick: (obj: LocalSorageObject) => void;
  favorite: LocalStorageItemShopCategory;
  id: string;
  baket: LocalStorageItemShopCategory;
}

export const ProductCard: FC<IProductCardProps> = ({
  item,
  favorite,
  id,
  onClick,
  baket,
}) => {
  const availabletext = 'В навності';
  const noAvailabletext = 'Немає в наявності';
  const localStorageObj = {
    id: item.id,
    elemId: id as keyof LocalStorageItemShop,
  };
  return (
    <ProductCardContainer id={item.id}>
      <ImageContainer>
        <ImageGenericContainer title={item.title} itemPhotos={item.images} />
        <DiscountContainer>{item.discount.percentage + '%'}</DiscountContainer>
      </ImageContainer>
      <TextContainer>
        <p style={{ textAlign: 'center' }}>{item.title}</p>
        <CostContainer>
          <Price>{item.price + valute}</Price>
          <OldPrice>
            {discountCalculate(item.price, item.discount.percentage) + valute}
          </OldPrice>
        </CostContainer>
      </TextContainer>
      <ButtonsContainer $available={item.inStockCount > 0}>
        <p>{item.inStockCount > 0 ? availabletext : noAvailabletext}</p>
        <FavoriteContainer
          onClick={() =>
            onClick({
              ...localStorageObj,
              type: 'favorites',
              itemType: item.type as keyof LocalStorageItemShopCategory,
            })
          }
          id={item.id}
        >
          <FavoriteIcon
            flag={
              favorite[item.type as keyof LocalStorageItemShopCategory][
                item.id
              ] || 0
            }
          />
        </FavoriteContainer>
      </ButtonsContainer>
      <Button
        style={{ marginTop: '20px' }}
        type="button"
        onClick={() =>
          onClick({
            ...localStorageObj,
            type: 'baket',
            itemType: item.type as keyof LocalStorageItemShopCategory,
          })
        }
      >
        {baket[item.type as keyof LocalStorageItemShopCategory][item.id]
          ? 'Видалити з кошику'
          : 'В кошик'}
      </Button>
    </ProductCardContainer>
  );
};
