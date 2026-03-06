import { useRef, useState, type FC } from 'react';
import type { ProductItem } from '../../types';
import { BaskerCardContainer, ImageContainer } from './BasketCard.styled';
import { ChangeColorList } from '../ChangeColorList';

interface IBasketCardProps {
  item: ProductItem;
}

export const BasketCard: FC<IBasketCardProps> = ({ item }) => {
  const [pointer, setPointer] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <BaskerCardContainer>
      <ImageContainer>
        <img src={item.photos[320][pointer]} />
        <ChangeColorList listRef={listRef} pointer={pointer} setPointer={setPointer} id={'list'} />
      </ImageContainer>
      <div></div>
    </BaskerCardContainer>
  );
};
