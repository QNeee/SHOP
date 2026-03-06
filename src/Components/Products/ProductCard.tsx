import { useRef, useState, type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItem,
  LocalStorageItemCategory,
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
import { Button } from '../GenericCarousel.styled';
import { FavoriteIcon } from '../FavoriteIcon';
import { discountCalculate, isDesktop, isMobile, useIsmobileWidth } from '../../Helper';
import { ChangeColorList } from '../ChangeColorList';
interface IProductCardProps {
  item: ProductItem;
  onClick: (obj: LocalSorageObject) => void;
  favorite: LocalStorageItemCategory;
  id: string;
  baket: LocalStorageItemCategory;
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
    elemId: id as keyof LocalStorageItem,
  };

  return (
    <ProductCardContainer id={item.id}>
      <ImageContainer>
        <img src={itemPhotos[pointer]} alt={item.text} />
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
              itemType: item.type as keyof LocalStorageItemCategory,
            })
          }
          id={item.id}
        >
          <FavoriteIcon
            flag={favorite[item.type as keyof LocalStorageItemCategory][item.id] || false}
          />
        </FavoriteContainer>
      </ButtonsContainer>
      <Button
        type="button"
        onClick={() =>
          onClick({
            ...localStorageObj,
            type: 'baket',
            itemType: item.type as keyof LocalStorageItemCategory,
          })
        }
      >
        {baket[item.type as keyof LocalStorageItemCategory][item.id]
          ? 'Видалити з кошику'
          : 'В кошик'}
      </Button>
    </ProductCardContainer>
  );
};
