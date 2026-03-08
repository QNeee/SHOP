import type { FC } from 'react';
import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { basket, main, order } from '../Helper';
import { Order } from '../Components/Order/Order';

interface IOrderPageProps {}
export const OrderPage: FC<IOrderPageProps> = ({}) => {
  const orderPath = `${main} / ${basket} / ${order}`;
  return (
    <GenericRoute path={orderPath} title={order}>
      <>
        <Order />
      </>
    </GenericRoute>
  );
};
