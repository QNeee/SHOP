import { useState, type FC } from 'react';
import {
  AddCardContainer,
  BankCardContainer,
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
import { AvailableTimesPickup, Courier } from '../../Helper';
import { AddIcon, ExclamationMark } from '../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from './AddPaymentCardForm';
import { TimeSelect } from './DeliveryTimeSelector';
interface IOrderFormProps {
  selected: string;
}

export const OrderForm: FC<IOrderFormProps> = ({ selected }) => {
  const [active, setActive] = useState(false);

  return (
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
        <AddCardContainer $active={active} onClick={() => setActive((prev) => !prev)}>
          <p>Нова картка</p>
          <AddIcon />
        </AddCardContainer>
      </BankCardContainer>
      {active ? <AddPaymentCardForm setActive={() => setActive((prev) => !prev)} /> : null}
    </FormContainer>
  );
};
