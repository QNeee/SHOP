import { type FC } from 'react';
import type { Actives, Card, ModalCardDelete } from '../../../../../types';
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
  setModal: React.Dispatch<React.SetStateAction<ModalCardDelete>>;
}
export const CardItem: FC<ICard> = ({
  card,
  actives,
  setActives,
  cardRefs,
  setModal,
}) => {
  const numbersDigitsOfCardToShow = 4;
  const cardNumber = FormValidator.deleteSpaces(card.cardNumber);
  const lastDigits = cardNumber.slice(-numbersDigitsOfCardToShow);

  return (
    <>
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
        <DeleteIconContainer
          onClick={() => setModal({ modal: true, cardNumber: card.cardNumber })}
        >
          <CloseIcon width={12} height={12} />
        </DeleteIconContainer>
        <img src={card.image} alt={card.image} />
        <CardNumberTextContainer>
          <p>**{lastDigits}</p>
        </CardNumberTextContainer>
      </CardContainer>
    </>
  );
};
