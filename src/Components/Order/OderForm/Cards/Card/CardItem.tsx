import { type FC } from 'react';
import type { Actives, Card } from '../../../../../types';
import {
  CardContainer,
  CardNumberTextContainer,
  DeleteIconContainer,
} from './CardItem.styled';
import { FormValidator } from '../../../FormValidator';
import { localStorageItemsKeys } from '../../../../../Helper';
import { CloseIcon } from '../../../../Generic/Icons/CloseIcon';

interface ICard {
  card: Card;
  setActives: React.Dispatch<React.SetStateAction<Actives>>;
  actives: Actives;
  cardRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}
export const CardItem: FC<ICard> = ({
  card,
  actives,
  setActives,
  cardRefs,
  setCards,
}) => {
  const numbersDigitsOfCardToShow = 4;
  const cardNumber = FormValidator.deleteSpaces(card.cardNumber);
  const lastDigits = cardNumber.slice(-numbersDigitsOfCardToShow);
  const onClickDeleteCard = () => {
    let lastActives = '';
    setCards((prev) => {
      const newCards = [...prev];
      const idx = newCards.findIndex((it) => it.cardNumber === card.cardNumber);
      if (idx !== -1) newCards.splice(idx, 1);
      if (actives.cardNumber === card.cardNumber && newCards.length > 0) {
        const index = (idx - 1 + newCards.length) % newCards.length;
        lastActives = newCards[index].cardNumber ?? '';
      } else {
        lastActives = actives.cardNumber;
      }
      localStorage.setItem(
        localStorageItemsKeys.cards,
        JSON.stringify(newCards),
      );
      localStorage.setItem(localStorageItemsKeys.card, lastActives);
      setActives({ cardNumber: lastActives, containerId: '' });
      return newCards;
    });
  };
  return (
    <CardContainer
      ref={(e) => {
        cardRefs.current[card.cardNumber] = e;
      }}
      onClick={() => {
        setActives({
          cardNumber: card.cardNumber,
          containerId: '',
        });
        localStorage.setItem(localStorageItemsKeys.card, card.cardNumber);
      }}
      key={card.cardNumber}
      $active={
        actives.cardNumber === card.cardNumber && actives.containerId === ''
      }
    >
      <DeleteIconContainer onClick={onClickDeleteCard}>
        <CloseIcon width={12} height={12} />
      </DeleteIconContainer>
      <img src={card.image} alt={card.image} />
      <CardNumberTextContainer>
        <p>**{lastDigits}</p>
      </CardNumberTextContainer>
    </CardContainer>
  );
};
