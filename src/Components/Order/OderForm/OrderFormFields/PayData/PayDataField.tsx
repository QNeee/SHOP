import { useEffect, useRef, useState, type FC } from 'react';
import { ExclamationMark } from '../../../../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from '../../../AddPaymentCardForm/AddPaymentCardForm';
import { ValidatedCardContainer } from '../../../ValidatedCardContainer/ValidatedCardContainer';
import { Cards } from '../../Cards/Cards';
import { SectionTitle } from '../../OrderForm.styled';
import { BankCardContainer, PaymentContainer } from './PayDataField.styled';
import type {
  Actives,
  Card,
  CheckFormOrder,
  ModalCardDelete,
} from '../../../../../types';
import {
  initialModalToDelete,
  localStorageItemsKeys,
  scrollToCard,
} from '../../../../../Helper';
import { DeleteCardModal } from '../../Cards/DeleteCardModal/DeleteCardModal';
interface IPayDataField {
  submit: boolean;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}
export const PayDataField: FC<IPayDataField> = ({
  submit,
  setCheckFormOrdr,
}) => {
  const [scrollYPos, setScrollYPos] = useState(0);
  const bankCardId = 'bankCardContainer';
  const addCardContainerId = 'addCardContainer';
  const ref = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [modal, setModal] = useState<ModalCardDelete>(initialModalToDelete);
  const [cards, setCards] = useState<Card[]>(() => {
    let data = [];
    const localData = localStorage.getItem(localStorageItemsKeys.cards);
    if (localData) data = JSON.parse(localData);
    else data = [];
    return data;
  });
  const [actives, setActives] = useState<Actives>(() => {
    return {
      cardNumber: localStorage.getItem(localStorageItemsKeys.card) || '',
      containerId: '',
    };
  });
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
    scrollToCard(container, card);
  }, [cards]);
  useEffect(() => {
    if (modal.modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);
  const onClickDeleteCard = () => {
    let lastActives = '';
    setCards((prev) => {
      const newCards = [...prev];
      const idx = newCards.findIndex(
        (it) => it.cardNumber === modal.cardNumber,
      );
      if (idx !== -1) newCards.splice(idx, 1);
      if (actives.cardNumber === modal.cardNumber && newCards.length > 0) {
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
      setModal(initialModalToDelete);
      return newCards;
    });
  };
  return (
    <div style={{ position: 'relative' }}>
      {modal.modal ? (
        <DeleteCardModal
          onConfirm={onClickDeleteCard}
          onCancel={() => setModal(initialModalToDelete)}
        />
      ) : null}
      <SectionTitle>Оплата</SectionTitle>
      <PaymentContainer>
        <p>Оплата тільки онлайн</p>
        <ExclamationMark />
      </PaymentContainer>
      <BankCardContainer>
        {cards.length > 0 ? (
          <Cards
            setModal={setModal}
            id={bankCardId}
            cardRefs={cardRefs}
            cards={cards}
            setActives={setActives}
            actives={actives}
          />
        ) : null}
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
    </div>
  );
};
