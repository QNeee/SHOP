import { type FC } from 'react';
import type { Actives, Card, ModalCardDelete } from '../../../../types';
import { CardItem } from './Card/CardItem';
import { CardsContainer } from './Cards.styled';

interface ICards {
  cards: Card[];
  setActives: React.Dispatch<React.SetStateAction<Actives>>;
  actives: Actives;
  cardRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  id: string;
  setModal: React.Dispatch<React.SetStateAction<ModalCardDelete>>;
}
export const Cards: FC<ICards> = ({
  cards,
  setActives,
  actives,
  cardRefs,
  id,
  setModal,
}) => {
  return (
    <CardsContainer id={id}>
      {cards.map((item) => (
        <CardItem
          setModal={setModal}
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
