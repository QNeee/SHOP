import { useState, type FC } from 'react';
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
