import { useEffect, useRef, useState, type FC } from 'react';
import {
  AddCardContainer,
  BankCardContainer,
  BorderDown,
  CardContainer,
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
import { AddIcon, ExclamationMark } from '../../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from '../AddPaymentCardForm/AddPaymentCardForm';
import { TimeSelect } from '../DeliveryTimeSelector/DeliveryTimeSelector';
import { PhoneInput } from '../PhoneInput/PhoneInput';
import type { Card, CheckFormOrder, DataForm } from '../../../types';
import { ValidatedInput } from '../ValidatedInput/ValidatedInput';
import type { FormAction } from '../formReducer';
import { getRandomBankIcon } from '../../Generic/Icons/BankCardIcons';

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
  const phoneRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [scrollYPos, setScrollYPos] = useState(0);
  const [cards, setCards] = useState<Card[]>(() => {
    const data = localStorage.getItem(localStorageItemsKeys.cards);
    return JSON.parse(data || '') || [];
  });
  useEffect(() => {
    const today = new Date();
    const weekLater = new Date();
    weekLater.setDate(today.getDate() + 7);
    dispatch({ type: 'SET_DATES', start: today, end: weekLater });
  }, []);

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
        />
        <PhoneInput
          name={'contactData,phone'}
          setCheckFormOrdr={setCheckFormOrdr}
          value={form.contactData.phone}
          inputRef={phoneRef}
          placeholder="+38 (___) ___-__-__"
          dispatch={dispatch}
          isValid={
            form.contactData.phone.length === 0 ? null : form.contactData.phone.length === 10
          }
          submit={submit}
        />
        <ValidatedInput
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          placeholder="Ivan@gmail.com"
          name="contactData,email"
          value={form.contactData.email}
          onChange={onChangeInput}
          isValid={form.contactData.email.length === 0 ? null : form.contactData.email.length > 3}
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

        <BankCardContainer>
          {cards.map((items) => (
            <CardContainer key={items.cardNumber}>
              <div>{getRandomBankIcon()}</div>
              <div>{items.cardNumber}</div>
            </CardContainer>
          ))}
          <AddCardContainer
            $active={active}
            onClick={() => {
              setActive((prev) => !prev);
              setScrollYPos(window.scrollY);
            }}
          >
            <p>Нова картка</p>
            <AddIcon />
          </AddCardContainer>
        </BankCardContainer>

        {active && (
          <div ref={ref}>
            <AddPaymentCardForm setCards={setCards} setActive={setActive} scrollYPos={scrollYPos} />
          </div>
        )}
      </FormContainer>

      <BorderDown />
      <div style={{ marginTop: '30px', height: '1px' }} />
    </>
  );
};
