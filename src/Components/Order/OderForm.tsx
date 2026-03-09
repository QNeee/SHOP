import { useEffect, useRef, useState, type FC } from 'react';
import {
  AddCardContainer,
  BankCardContainer,
  BorderDown,
  CourierAdressContainer,
  DeliveryDateContainer,
  DeliveryTimeContainer,
  DeliveryTimeSelect,
  DeliveryTimeSelectContainer,
  FormContainer,
  Input,
  PaymentContainer,
  PickUpDataContainer,
  Row,
  SectionTitle,
  TextArea,
} from './OrderForm.styled';
import { AvailableTimesPickup, Courier, initialTotalObj } from '../../Helper';
import { AddIcon, ExclamationMark } from '../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from './AddPaymentCardForm';
import { TimeSelect } from './DeliveryTimeSelector';
import type { TotalObj } from '../../types';
import { Total } from '../Generic/Total/Total';
import { BasketButton } from '../Basket/Basket.styled';

interface IOrderFormProps {
  selected: string;
  setTotalObj: React.Dispatch<React.SetStateAction<TotalObj>>;
  totalObj: TotalObj;
}

export const OrderForm: FC<IOrderFormProps> = ({ selected, totalObj, setTotalObj }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [scrollYPos, setScrollYPos] = useState(0);
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
        <Input placeholder="Ім'я *" />
        <Input placeholder="Телефон *" />
        <Input placeholder="Email" />
        {selected === Courier.key ? (
          <PickUpDataContainer>
            <CourierAdressContainer>
              <SectionTitle>Адреса доставки</SectionTitle>

              <Input placeholder="Місто *" />
              <Input placeholder="Вулиця *" />

              <Row>
                <Input placeholder="Дім *" />
                <Input placeholder="Квартира *" />
              </Row>
            </CourierAdressContainer>
            <div>
              <SectionTitle>Дані по доставці</SectionTitle>
              <div>
                <p>Дата доставки</p>
                <DeliveryDateContainer>
                  <div></div>
                  <div></div>
                </DeliveryDateContainer>
              </div>
              <div>
                <p>Час</p>
                <DeliveryTimeContainer>
                  <DeliveryTimeSelect>
                    <div>
                      <DeliveryTimeSelectContainer>
                        <TimeSelect options={AvailableTimesPickup} />
                      </DeliveryTimeSelectContainer>
                    </div>
                  </DeliveryTimeSelect>
                </DeliveryTimeContainer>
              </div>
            </div>
          </PickUpDataContainer>
        ) : null}
        <SectionTitle>Побажання</SectionTitle>

        <TextArea placeholder="Повідомлення ..." />

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
      <Total total={totalObj} />
      <BasketButton
        onClick={() => {
          setTotalObj(initialTotalObj);
        }}
      >
        Оформити замовлення
      </BasketButton>
      <></>
    </>
  );
};
