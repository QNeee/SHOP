import { useRef, useState, type FC } from 'react';
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
import { discountCalculate, isDesktop, isMobile, useIsmobileWidth } from '../../Helper';
import { ChangeColorList } from '../Generic/ChangeColorList/ChangeColorList';
interface IProductCardProps {
  item: ProductItem;
  onClick: (obj: LocalSorageObject) => void;
  favorite: LocalStorageItemShopCategory;
  id: string;
  baket: LocalStorageItemShopCategory;
}

export const ProductCard: FC<IProductCardProps> = ({ item, favorite, id, onClick, baket }) => {
  const isMobileWidth = useIsmobileWidth();
  const itemPhotos = isMobileWidth ? item.photos[isMobile] : item.photos[isDesktop];
  const [pointer, setPointer] = useState(0);
  const availabletext = 'В навності';
  const noAvailabletext = 'Немає в наявності';
  const listRef = useRef<HTMLUListElement>(null);
  const localStorageObj = {
    id: item.id,
    elemId: id as keyof LocalStorageItemShop,
  };

  return (
    <ProductCardContainer id={item.id}>
      <ImageContainer>
        <img src={itemPhotos[pointer]} loading="lazy" alt={item.text} />
        <ChangeColorList listRef={listRef} setPointer={setPointer} pointer={pointer} id={'list'} />
        <DiscountContainer>{item.discount + '%'}</DiscountContainer>
      </ImageContainer>
      <TextContainer>
        <p>{item.text}</p>
        <CostContainer>
          <Price>{item.price + item.valute}</Price>
          <OldPrice>{discountCalculate(item.price, item.discount) + item.valute}</OldPrice>
        </CostContainer>
      </TextContainer>
      <ButtonsContainer $available={item.available}>
        <p>{item.available ? availabletext : noAvailabletext}</p>
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
            flag={favorite[item.type as keyof LocalStorageItemShopCategory][item.id] || 0}
          />
        </FavoriteContainer>
      </ButtonsContainer>
      <Button
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
