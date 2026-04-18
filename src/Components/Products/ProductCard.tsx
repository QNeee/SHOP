import { type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShop,
  LocalStorageItemShopCategory,
  SharesItem,
} from '../../types';
import {
  ButtonsContainer,
  CostContainer,
  DiscountContainer,
  FavoriteContainer,
  ImageContainer,
  ProductCardContainer,
  TextContainer,
} from './ProductCard.styled';
import { Button } from '../Generic/GenericCarousel/GenericCarousel.styled';
import { FavoriteIcon } from '../Generic/Icons/FavoriteIcon';
import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import { Cost } from './Cost';
interface IProductCardProps {
  item: SharesItem;
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
    id: item.productVariantId,
    elemId: id as keyof LocalStorageItemShop,
  };
  return (
    <ProductCardContainer id={item.productVariantId}>
      <ImageContainer>
        <ImageGenericContainer title={item.title} itemPhotos={item.images} />
        <DiscountContainer>{item.discountPercentage + '%'}</DiscountContainer>
      </ImageContainer>
      <TextContainer>
        <p style={{ textAlign: 'center' }}>{item.title}</p>
        <CostContainer>
          <Cost
            itemPrice={item.price}
            itemDiscountPercentage={item.discountPercentage}
          />
        </CostContainer>
      </TextContainer>
      <ButtonsContainer $available={item.stock > 0}>
        <p>{item.stock > 0 ? availabletext : noAvailabletext}</p>
        <FavoriteContainer
          onClick={() =>
            onClick({
              ...localStorageObj,
              type: 'favorites',
              itemType: item.categoryId as keyof LocalStorageItemShopCategory,
            })
          }
          id={item.productVariantId}
        >
          <FavoriteIcon
            flag={
              favorite[item.categoryId as keyof LocalStorageItemShopCategory][
                item.productVariantId
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
            itemType: item.categoryId as keyof LocalStorageItemShopCategory,
          })
        }
      >
        {baket[item.categoryId as keyof LocalStorageItemShopCategory][
          item.productVariantId
        ]
          ? 'Видалити з кошику'
          : 'В кошик'}
      </Button>
    </ProductCardContainer>
  );
};
