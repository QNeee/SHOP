import { useEffect, useRef, useState, type FC } from 'react';
import {
  AddCardContainer,
  BankCardContainer,
  BorderDown,
  CourierAdressContainer,
  DeliveryDateContainer,
  DeliveryDateItem,
  DeliveryTimeSelectContainer,
  FormContainer,
  Input,
  PaymentContainer,
  PickUpDataContainer,
  Row,
  SectionTitle,
  TextArea,
} from './OrderForm.styled';
import { AvailableTimesPickup, Courier, formatDate } from '../../Helper';
import { AddIcon, ExclamationMark } from '../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from './AddPaymentCardForm';
import { TimeSelect } from './DeliveryTimeSelector';
import { PhoneInput } from './PhonInput';
import type { DataForm } from '../../types';
import type { FormAction } from './formReducer';

interface IOrderFormProps {
  selected: string;
  dispatch: (action: FormAction) => void;
  form: DataForm;
}

export const OrderForm: FC<IOrderFormProps> = ({ selected, dispatch, form }) => {
  const phoneRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [scrollYPos, setScrollYPos] = useState(0);

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

  // універсальний onChange для input/textarea
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const section = e.currentTarget.id as keyof DataForm;
    const field = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch({ type: 'SET_FIELD', section, field, value });
  };

  return (
    <>
      <FormContainer>
        <SectionTitle>Контактні дані</SectionTitle>

        <Input
          placeholder="Ім'я *"
          name="name"
          id="contactData"
          value={form.contactData.name}
          onChange={onChangeInput}
        />

        <PhoneInput
          value={form.contactData.phone}
          inputRef={phoneRef}
          placeholder="+38 (___) ___-__-__ *"
          dispatch={dispatch}
        />

        <Input
          placeholder="Email"
          name="email"
          id="contactData"
          value={form.contactData.email}
          onChange={onChangeInput}
        />

        {selected === Courier.key && (
          <PickUpDataContainer>
            <CourierAdressContainer>
              <SectionTitle>Адреса доставки</SectionTitle>

              <Input
                placeholder="Місто *"
                name="city"
                id="deliveryAdress"
                value={form.deliveryAdress.city}
                onChange={onChangeInput}
              />
              <Input
                placeholder="Вулиця *"
                name="street"
                id="deliveryAdress"
                value={form.deliveryAdress.street}
                onChange={onChangeInput}
              />
              <Row>
                <Input
                  placeholder="Дім *"
                  name="house"
                  id="deliveryAdress"
                  value={form.deliveryAdress.house}
                  onChange={onChangeInput}
                />
                <Input
                  placeholder="Квартира *"
                  name="flat"
                  id="deliveryAdress"
                  value={form.deliveryAdress.flat}
                  onChange={onChangeInput}
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
          name="message"
          id="deliveryData"
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
            <AddPaymentCardForm setActive={setActive} scrollYPos={scrollYPos} />
          </div>
        )}
      </FormContainer>

      <BorderDown />
      <div style={{ marginTop: '30px', height: '1px' }} />
    </>
  );
};
