import { useEffect, useRef, useState, type FC } from 'react';
import type { FavoriteObject, ProductItem } from '../../types';
import {
  ButtonsContainer,
  ChangeList,
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
import { isDesktop, isMobile, useIsmobileWidth } from '../../Helper';
interface IProductCardProps {
  item: ProductItem;
  onClickFavorite: (obj: FavoriteObject) => void;
  favorite: Record<string, boolean>;
  id: string;
}

export const ProductCard: FC<IProductCardProps> = ({ item, onClickFavorite, favorite, id }) => {
  const isMobileWidth = useIsmobileWidth();
  const itemPhotos = isMobileWidth ? item.photos[isMobile] : item.photos[isDesktop];
  const [pointer, setPointer] = useState(0);
  const availabletext = 'В навності';
  const noAvailabletext = 'Немає в наявності';
  const listRef = useRef<HTMLUListElement>(null);
  const discountCalculate = () => {
    return (item.price + (item.price * item.discount) / 100).toFixed() + item.valute;
  };
  const onClickCircle = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    if (pointer == parseInt(target.id) || target.id == 'list') return;
    setPointer(parseInt(target.id));
  };

  useEffect(() => {
    if (!listRef.current) return;

    Array.from(listRef.current.children).forEach((li) => {
      (li as HTMLElement).style.backgroundColor = li.id === pointer.toString() ? 'blue' : 'white';
    });
  }, [pointer]);
  return (
    <ProductCardContainer id={item.id}>
      <ImageContainer>
        <img src={itemPhotos[pointer]} alt={item.text} />
        <ChangeList ref={listRef} onClick={onClickCircle} id="list">
          <li id="0"></li>
          <li id="1"></li>
          <li id="2"></li>
        </ChangeList>
        <DiscountContainer>{item.discount + '%'}</DiscountContainer>
      </ImageContainer>
      <TextContainer>
        <p>{item.text}</p>
        <CostContainer>
          <Price>{item.price + item.valute}</Price>
          <OldPrice>{discountCalculate()}</OldPrice>
        </CostContainer>
      </TextContainer>
      <ButtonsContainer $available={item.available}>
        <p>{item.available ? availabletext : noAvailabletext}</p>
        <FavoriteContainer
          onClick={() => onClickFavorite({ id: item.id, elemId: id })}
          id={item.id}
        >
          <FavoriteIcon flag={favorite[item.id] || false} />
        </FavoriteContainer>
      </ButtonsContainer>
      <Button type="button">В кошик</Button>
    </ProductCardContainer>
  );
};
