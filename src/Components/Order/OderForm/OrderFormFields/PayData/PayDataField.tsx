import { useEffect, useRef, useState, type FC } from 'react';
import { ExclamationMark } from '../../../../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from '../../../AddPaymentCardForm/AddPaymentCardForm';
import { ValidatedCardContainer } from '../../../ValidatedCardContainer/ValidatedCardContainer';
import { Cards } from '../../Cards/Cards';
import { SectionTitle } from '../../OrderForm.styled';
import { BankCardContainer, PaymentContainer } from './PayDataField.styled';
import type { Actives, Card, CheckFormOrder } from '../../../../../types';
interface IPayDataField {
  cards: Card[];
  setActives: React.Dispatch<React.SetStateAction<Actives>>;
  actives: Actives;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  submit: boolean;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}
export const PayDataField: FC<IPayDataField> = ({
  cards,
  setActives,
  setCards,
  actives,
  submit,
  setCheckFormOrdr,
}) => {
  const [scrollYPos, setScrollYPos] = useState(0);
  const bankCardId = 'bankCardContainer';
  const addCardContainerId = 'addCardContainer';
  const ref = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  useEffect(() => {
    if (actives.containerId) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [actives.containerId]);
  useEffect(() => {
    const container = document.getElementById(bankCardId);
    const card = cardRefs.current[actives.cardNumber];

    if (container && card) {
      const cardOffsetLeft = card.offsetLeft;
      const containerWidth = container.clientWidth;
      const cardWidth = card.clientWidth;
      container.scrollTo({
        left: cardOffsetLeft - (containerWidth - cardWidth) / 2,
        behavior: 'smooth',
      });
    }
  }, [actives.cardNumber]);
  return (
    <>
      <SectionTitle>Оплата</SectionTitle>
      <PaymentContainer>
        <p>Оплата тільки онлайн</p>
        <ExclamationMark />
      </PaymentContainer>
      <BankCardContainer>
        <Cards
          id={bankCardId}
          cardRefs={cardRefs}
          cards={cards}
          setActives={setActives}
          actives={actives}
        />
        <ValidatedCardContainer
          name="payData"
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          id={addCardContainerId}
          setActives={setActives}
          setScrollYPos={setScrollYPos}
          actives={actives}
          isValid={cards.length > 0}
        />
      </BankCardContainer>

      {actives.containerId === addCardContainerId ? (
        <div ref={ref}>
          <AddPaymentCardForm
            cards={cards}
            setCards={setCards}
            setActives={setActives}
            scrollYPos={scrollYPos}
          />
        </div>
      ) : null}
    </>
  );
};
