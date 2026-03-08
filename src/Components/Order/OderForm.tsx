import { useState, type FC } from 'react';
import {
  AddCardContainer,
  BankCardContainer,
  CourierAdressContainer,
  FormContainer,
  Input,
  PaymentContainer,
  Row,
  SectionTitle,
  TextArea,
} from './OrderForm.styled';
import { Courier } from '../../Helper';
import { AddIcon, ExclamationMark } from '../Generic/Icons/OrderFormsIcons';
import { AddPaymentCardForm } from './AddPaymentCardForm';
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
        <CourierAdressContainer>
          <SectionTitle>Адреса доставки</SectionTitle>

          <Input placeholder="Місто *" />
          <Input placeholder="Вулиця *" />

          <Row>
            <Input placeholder="Дім *" />
            <Input placeholder="Квартира *" />
          </Row>
        </CourierAdressContainer>
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
