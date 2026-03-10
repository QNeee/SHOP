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

interface IOrderFormProps {
  selected: string;
  form: DataForm;
  setForm: React.Dispatch<React.SetStateAction<DataForm>>;
}

export const OrderForm: FC<IOrderFormProps> = ({ form, setForm, selected }) => {
  const phoneRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [scrollYPos, setScrollYPos] = useState(0);
  const today = new Date();
  const weekLater = new Date();
  weekLater.setDate(today.getDate() + 7);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id as keyof DataForm;
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setForm((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    const today = new Date();

    const weekLater = new Date();
    weekLater.setDate(today.getDate() + 7);

    setForm((prev) => ({
      ...prev,
      deliveryData: {
        ...prev.deliveryData,
        deliveryDateStart: today,
        deliveryDateEnd: weekLater,
      },
    }));
  }, []);
  useEffect(() => {
    if (active) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [active]);
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
          setForm={setForm}
          placeholder="+38 (___) ___-__-__ *"
          inputRef={phoneRef}
        />
        <Input
          placeholder="Email"
          name="email"
          id="contactData"
          value={form.contactData.email}
          onChange={onChangeInput}
        />
        {selected === Courier.key ? (
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
              <div>
                <p>Дата доставки</p>
                <DeliveryDateContainer>
                  <DeliveryDateItem>
                    {formatDate(form.deliveryData.deliveryDateStart)}
                  </DeliveryDateItem>
                  <DeliveryDateItem>
                    {formatDate(form.deliveryData.deliveryDateEnd)}
                  </DeliveryDateItem>
                </DeliveryDateContainer>
              </div>
              <div>
                <p>Час</p>
                <DeliveryTimeSelectContainer
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                >
                  <TimeSelect
                    setForm={setForm}
                    open={open}
                    setOpen={setOpen}
                    options={AvailableTimesPickup}
                  />
                </DeliveryTimeSelectContainer>
              </div>
            </div>
          </PickUpDataContainer>
        ) : null}
        <SectionTitle>Побажання</SectionTitle>

        <TextArea
          name="msg"
          id="deliveryData"
          placeholder="Повідомлення ..."
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              deliveryData: {
                ...prev.deliveryData,
                message: e.target.value,
              },
            }))
          }
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
        {active ? (
          <div ref={ref}>
            <AddPaymentCardForm setActive={setActive} scrollYPos={scrollYPos} />
          </div>
        ) : null}
      </FormContainer>
      <BorderDown> </BorderDown>
      <div style={{ marginTop: '30px', height: '1px' }}></div>

      <></>
    </>
  );
};
