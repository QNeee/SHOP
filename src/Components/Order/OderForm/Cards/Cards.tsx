import { type FC } from 'react';
import type { Actives, Card } from '../../../../types';
import { CardItem } from './Card/CardItem';
import { CardsContainer } from './Cards.styled';

interface ICards {
  cards: Card[];
  setActives: React.Dispatch<React.SetStateAction<Actives>>;
  actives: Actives;
  cardRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  id: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}
export const Cards: FC<ICards> = ({
  cards,
  setActives,
  actives,
  cardRefs,
  id,
  setCards,
}) => {
  return (
    <CardsContainer id={id}>
      {cards.map((item) => (
        <CardItem
          setCards={setCards}
          key={item.cardNumber}
          card={item}
          setActives={setActives}
          actives={actives}
          cardRefs={cardRefs}
        />
      ))}
    </CardsContainer>
  );
};
