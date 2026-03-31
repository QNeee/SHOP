import { useEffect, useRef, useState, type FC } from 'react';
import {
  BankCardContainer,
  BorderDown,
  CardContainer,
  CardNumberTextContainer,
  CardsContainer,
  CourierAdressContainer,
  DeliveryDateContainer,
  DeliveryDateItem,
  DeliveryTimeSelectContainer,
  FormContainer,
  PaymentContainer,
  PickUpDataContainer,
  Row,
  SectionTitle,
  TextArea,
} from './OrderForm.styled';
import { AvailableTimesPickup, Courier, formatDate, localStorageItemsKeys } from '../../../Helper';
import { ExclamationMark } from '../../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from '../AddPaymentCardForm/AddPaymentCardForm';
import { TimeSelect } from '../DeliveryTimeSelector/DeliveryTimeSelector';
import type { Card, CheckFormOrder, DataForm, PayData } from '../../../types';
import { ValidatedInput } from '../ValidatedInput/ValidatedInput';
import type { FormAction } from '../formReducer';
import { ValidatedCardContainer } from '../ValidatedCardContainer/ValidatedCardContainer';

interface IOrderFormProps {
  selected: string;
  submit: boolean;
  form: DataForm;
  dispatch: React.ActionDispatch<[action: FormAction]>;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}

export const OrderForm: FC<IOrderFormProps> = ({
  selected,
  submit,
  form,
  dispatch,
  setCheckFormOrdr,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [scrollYPos, setScrollYPos] = useState(0);
  const bankCardId = 'bankCardContainer';
  const addCardContainerId = 'addCardContainer';
  const [cards, setCards] = useState<Card[]>(() => {
    let data = [];
    const localData = localStorage.getItem(localStorageItemsKeys.cards);
    if (localData) data = JSON.parse(localData);
    else data = [];
    return data;
  });
  const [active, setActive] = useState(cards[0]?.cardNumber || '');
  useEffect(() => {
    const today = new Date();
    const weekLater = new Date();
    weekLater.setDate(today.getDate() + 7);
    dispatch({ type: 'SET_DATES', start: today, end: weekLater });
  }, []);
  useEffect(() => {
    if (cards.length > 0) {
      const card = cards[cards.length - 1];
      const payData: PayData = {
        cardNumber: card.cardNumber,
        date: card.image,
      };
      setActive(card.cardNumber);
      dispatch({ type: 'SET_PAY', payData });
    }
  }, [cards]);
  useEffect(() => {
    if (active) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [active]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    const [sectionStr, field] = e.currentTarget.name.split(',');
    const section = sectionStr as keyof DataForm;
    dispatch({ type: 'SET_FIELD', section, field, value });
  };

  return (
    <>
      <FormContainer>
        <SectionTitle>Контактні дані</SectionTitle>
        <ValidatedInput
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          value={form.contactData.name}
          onChange={onChangeInput}
          placeholder="Іван"
          name="contactData,name"
          isValid={form.contactData.name.length === 0 ? null : form.contactData.name.length > 3}
          dispatch={dispatch}
        />
        <ValidatedInput
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          value={form.contactData.phone}
          placeholder="+38 (___) ___-__-__"
          name={'contactData,phone'}
          isValid={
            form.contactData.phone.length === 0 ? null : form.contactData.phone.length === 10
          }
          dispatch={dispatch}
        />
        <ValidatedInput
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          placeholder="Ivan@gmail.com"
          name="contactData,email"
          value={form.contactData.email}
          onChange={onChangeInput}
          isValid={form.contactData.email.length === 0 ? null : form.contactData.email.length > 3}
          dispatch={dispatch}
        />

        {selected === Courier.key && (
          <PickUpDataContainer>
            <CourierAdressContainer>
              <SectionTitle>Адреса доставки</SectionTitle>
              <ValidatedInput
                setFormChecked={setCheckFormOrdr}
                submit={submit}
                placeholder="Київ"
                name="deliveryAdress,city"
                value={form.deliveryAdress.city}
                onChange={onChangeInput}
                isValid={
                  form.deliveryAdress.city.length === 0 ? null : form.deliveryAdress.city.length > 3
                }
                dispatch={dispatch}
              />
              <ValidatedInput
                setFormChecked={setCheckFormOrdr}
                submit={submit}
                placeholder="пр.переулка 12"
                name="deliveryAdress,street"
                value={form.deliveryAdress.street}
                onChange={onChangeInput}
                isValid={
                  form.deliveryAdress.street.length === 0
                    ? null
                    : form.deliveryAdress.street.length > 3
                }
                dispatch={dispatch}
              />
              <Row>
                <ValidatedInput
                  setFormChecked={setCheckFormOrdr}
                  submit={submit}
                  placeholder="12"
                  name="deliveryAdress,house"
                  value={form.deliveryAdress.house}
                  onChange={onChangeInput}
                  isValid={
                    form.deliveryAdress.house.length === 0
                      ? null
                      : form.deliveryAdress.house.length > 3
                  }
                  dispatch={dispatch}
                />
                <ValidatedInput
                  setFormChecked={setCheckFormOrdr}
                  submit={submit}
                  placeholder="6"
                  name="deliveryAdress,flat"
                  value={form.deliveryAdress.flat}
                  onChange={onChangeInput}
                  isValid={
                    form.deliveryAdress.flat.length === 0
                      ? null
                      : form.deliveryAdress.flat.length > 3
                  }
                  dispatch={dispatch}
                />
              </Row>
            </CourierAdressContainer>

            <div>
              <SectionTitle>Дані по доставці</SectionTitle>
              <p>Дата доставки</p>
              <DeliveryDateContainer>
                <DeliveryDateItem>
                  {formatDate(form.deliveryData.deliveryDateStart)}
                </DeliveryDateItem>
                <DeliveryDateItem>{formatDate(form.deliveryData.deliveryDateEnd)}</DeliveryDateItem>
              </DeliveryDateContainer>

              <p>Час</p>
              <DeliveryTimeSelectContainer onClick={() => setOpen((prev) => !prev)}>
                <TimeSelect
                  open={open}
                  setOpen={setOpen}
                  options={AvailableTimesPickup}
                  dispatch={dispatch}
                />
              </DeliveryTimeSelectContainer>
            </div>
          </PickUpDataContainer>
        )}

        <SectionTitle>Побажання</SectionTitle>
        <TextArea
          name="deliveryData,message"
          placeholder="Повідомлення ..."
          value={form.deliveryData.message}
          onChange={onChangeInput}
        />

        <SectionTitle>Оплата</SectionTitle>
        <PaymentContainer>
          <p>Оплата тільки онлайн</p>
          <ExclamationMark />
        </PaymentContainer>

        <BankCardContainer id={bankCardId}>
          {cards.length > 0 ? <CardsContainer>
            {cards.map((items) => (
              <CardContainer
                onClick={() => setActive(items.cardNumber)}
                key={items.cardNumber}
                $active={active === items.cardNumber}
              >
                <img src={items.image} alt={items.image} />
                <CardNumberTextContainer>
                  <p>**{items.cardNumber}</p>
                </CardNumberTextContainer>
              </CardContainer>
            ))}
          </CardsContainer> : null}
          <ValidatedCardContainer
            name="payData"
            setFormChecked={setCheckFormOrdr}
            submit={submit}
            id={addCardContainerId}
            setActive={setActive}
            setScrollYPos={setScrollYPos}
            active={active}
            isValid={!active ? null : cards.length > 0}
          />
        </BankCardContainer>

        {active === addCardContainerId ? (
          <div ref={ref}>
            <AddPaymentCardForm cards={cards} setCards={setCards} setActive={setActive} scrollYPos={scrollYPos} />
          </div>
        ) : null}
      </FormContainer>

      <BorderDown />
      <div style={{ marginTop: '30px', height: '1px' }} />
    </>
  );
};
