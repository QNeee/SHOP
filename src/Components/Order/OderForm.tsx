import type { FC } from 'react';
import {
  CourierAdressContainer,
  FormContainer,
  Input,
  PaymentButton,
  Row,
  SectionTitle,
  TextArea,
} from './OrderForm.styled';
import { Courier } from '../../Helper';
interface IOrderFormProps {
  selected: string;
}
export const OrderForm: FC<IOrderFormProps> = ({ selected }) => {
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

      <PaymentButton>Оплата тільки онлайн</PaymentButton>
    </FormContainer>
  );
};
