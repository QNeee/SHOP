import { useEffect, useRef, useState, type FC } from 'react';
import type { SharesItem } from '../../types';
import {
  ButtonsContainer,
  ChangeList,
  CostContainer,
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
}
export const SharesCard: FC<ISharesCardProps> = ({ item }) => {
  const [pointer, setPointer] = useState(0);
  const availabletext = 'В навності';
  const noAvailabletext = 'Немає в наявності';
  const listRef = useRef<HTMLUListElement>(null);
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
    <SharesCardContainer>
      <ImageContainer>
        <img width={114} height={158} src={item.photos[pointer]} alt={item.text} />
        <ChangeList ref={listRef} onClick={onClickCircle} id="list">
          <li id="0"></li>
          <li id="1"></li>
          <li id="2"></li>
        </ChangeList>
      </ImageContainer>
      <TextContainer>
        <p>{item.text}</p>
        <CostContainer>
          <Price>{item.price + item.valute}</Price>
          <OldPrice>
            {(item.price + (item.price * item.discount) / 100).toFixed() + item.valute}
          </OldPrice>
        </CostContainer>
      </TextContainer>
      <ButtonsContainer $available={item.available}>
        <p>{item.available ? availabletext : noAvailabletext}</p>
        <FavoriteContainer>
          <FavoriteIcon />
        </FavoriteContainer>
      </ButtonsContainer>
      <Button style={{ marginTop: '15px', marginBottom: '15px' }}>В корзину</Button>
    </SharesCardContainer>
  );
};
