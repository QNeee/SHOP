import type { FC } from 'react';
import type { Actives, Card } from '../../../../../types';
import { CardContainer, CardNumberTextContainer } from './Card.styled';
import { FormValidator } from '../../../FormValidator';
interface ICard {
  card: Card;
  setActives: React.Dispatch<React.SetStateAction<Actives>>;
  actives: Actives;
}
export const CardItem: FC<ICard> = ({ card, actives, setActives }) => {
  const numbersDigitsOfCardToShow = 4;
  const cardNumber = FormValidator.deleteSpaces(card.cardNumber);
  const lastDigits = cardNumber.slice(-numbersDigitsOfCardToShow);
  return (
    <CardContainer
      onClick={() =>
        setActives({
          cardNumber: card.cardNumber,
          containerId: '',
        })
      }
      key={card.cardNumber}
      $active={
        actives.cardNumber === card.cardNumber && actives.containerId === ''
      }
    >
      <img src={card.image} alt={card.image} />
      <CardNumberTextContainer>
        <p>**{lastDigits}</p>
      </CardNumberTextContainer>
    </CardContainer>
  );
};
