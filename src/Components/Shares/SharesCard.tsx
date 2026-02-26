import { useState, type FC } from 'react';
import type { SharesItem } from '../../types';
import {
  ButtonsContainer,
  ChangeList,
  CostContainer,
  ImageContainer,
  SharesCardContainer,
  TextContainer,
} from './SharesCard.styled';
import { FavoriteIcon } from '../../assets/Shares/Shares';
interface ISharesCardProps {
  item: SharesItem;
}
export const SharesCard: FC<ISharesCardProps> = ({ item }) => {
  const [pointer, setPointer] = useState(0);
  return (
    <SharesCardContainer>
      <ImageContainer>
        <img src={item.photos[pointer]} alt={item.text} />
        <ChangeList>
          <li></li>
          <li></li>
          <li></li>
        </ChangeList>
      </ImageContainer>
      <TextContainer>
        <p>{item.text}</p>
        <CostContainer>
          <p>{item.price + item.valute}</p>
          <p>{item.price + item.valute}</p>
        </CostContainer>
      </TextContainer>
      <ButtonsContainer>
        <p></p>
        <FavoriteIcon />
        <button></button>
      </ButtonsContainer>
    </SharesCardContainer>
  );
};
