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
  ImageContainer,
  ProductCardContainer,
  TextContainer,
} from './ProductCard.styled';
import { Button } from '../Generic/GenericCarousel/GenericCarousel.styled';
import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import { Cost } from './Cost';
import { FavoriteElem } from '../Generic/Favorite/FavoriteElem';
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
      </ButtonsContainer>
      <Button
        style={{ marginTop: '20px' }}
        type="button"
        onClick={() =>
          onClick({
            ...localStorageObj,
            type: 'basket',
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
