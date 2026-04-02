import type { FC } from 'react';
import { formatDate } from '../../../../../../Helper';
import { SectionTitle } from '../../../OrderForm.styled';
import { DeliveryDateContainer, DeliveryDateItem } from './DeliveryDate.styled';
interface IDeliveryDate {
  dateStart: Date;
  dateEnd: Date;
}
export const DeliveryDate: FC<IDeliveryDate> = ({ dateStart, dateEnd }) => {
  return (
    <>
      <SectionTitle>Дані по доставці</SectionTitle>
      <p>Дата доставки</p>
      <DeliveryDateContainer>
        <DeliveryDateItem>{formatDate(dateStart)}</DeliveryDateItem>
        <DeliveryDateItem>{formatDate(dateEnd)}</DeliveryDateItem>
      </DeliveryDateContainer>
    </>
  );
};
