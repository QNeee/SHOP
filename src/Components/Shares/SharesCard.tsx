import { useEffect, useRef, useState, type FC } from 'react';
import type { SharesItem } from '../../types';
import {
  ButtonsContainer,
  ChangeList,
  CostContainer,
  DiscountContainer,
  FavoriteContainer,
  ImageContainer,
  OldPrice,
  Price,
  SharesCardContainer,
  TextContainer,
} from './SharesCard.styled';
import { FavoriteIcon } from '../../assets/Shares/Shares';
import { Button } from '../GenericCarousel.styled';
interface ISharesCardProps {
  item: SharesItem;
  onClickFavorite: (id: string) => void;
  favorite: string[];
}

export const SharesCard: FC<ISharesCardProps> = ({ item, onClickFavorite, favorite }) => {
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
    <SharesCardContainer id={item.id}>
      <ImageContainer>
        <img width={114} height={158} src={item.photos[pointer]} alt={item.text} />
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
        <FavoriteContainer onClick={() => onClickFavorite(item.id)} id={item.id}>
          <FavoriteIcon num={favorite.findIndex((it) => it === item.id)} />
        </FavoriteContainer>
      </ButtonsContainer>
      <Button style={{ marginTop: '15px', marginBottom: '15px' }}>В кошик</Button>
    </SharesCardContainer>
  );
};
