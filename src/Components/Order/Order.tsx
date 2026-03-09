import { useState, type FC } from 'react';
import { DeliverySelector } from './DeliverySelector';
import { OrderForm } from './OderForm';
import { Courier } from '../../Helper';
import type { TotalObj } from '../../types';
interface IOrderProps {
  setTotalObj: React.Dispatch<React.SetStateAction<TotalObj>>;
  totalObj: TotalObj;
}
export const Order: FC<IOrderProps> = ({ totalObj, setTotalObj }) => {
  const [delivery, setDelivery] = useState(Courier.key);
  return (
    <div>
      <DeliverySelector setDelivery={setDelivery} delivery={delivery} />
      <OrderForm selected={delivery} totalObj={totalObj} setTotalObj={setTotalObj} />
    </div>
  );
};
