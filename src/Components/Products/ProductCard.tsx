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
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  favorite: LocalStorageItemShopCategory;
  id: string;
  baket: LocalStorageItemShopCategory;
}

export const ProductCard: FC<IProductCardProps> = ({
  item,
  favorite,
  id,
  onClickAdd,
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
          onClickAdd={onClickAdd}
          item={item}
          flag={favorite[item.productVariantId] || 0}
          localStorageObj={localStorageObj}
        />
      </ButtonsContainer>
      <Button
        style={{ marginTop: '20px' }}
        type="button"
        onClick={() =>
          onClickAdd(
            {
              ...localStorageObj,
              type: 'basket',
              itemId: item.productVariantId,
            },
            item,
          )
        }
      >
        {baket[item.productVariantId] ? 'Видалити з кошику' : 'В кошик'}
      </Button>
    </ProductCardContainer>
  );
};
