import type { FC } from 'react';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import { basket, main, order } from '../Helper';
import { Order } from '../Components/Order/Order';
import type { TotalObj } from '../types';

interface IOrderPageProps {
  setTotalObj: React.Dispatch<React.SetStateAction<TotalObj>>;
  totalObj: TotalObj;
}
export const OrderPage: FC<IOrderPageProps> = ({ totalObj, setTotalObj }) => {
  const orderPath = `${main} / ${basket} / ${order}`;
  return (
    <GenericRoute path={orderPath} title={order}>
      <>
        <Order totalObj={totalObj} setTotalObj={setTotalObj} />
      </>
    </GenericRoute>
  );
};
