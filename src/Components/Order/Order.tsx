import { useState, type FC } from 'react';
import { DeliverySelector } from './DeliverySelector';
import { OrderForm } from './OderForm';
import { Courier } from '../../Helper';

interface IOrderProps {}
export const Order: FC<IOrderProps> = () => {
  const [delivery, setDelivery] = useState(Courier.key);
  return (
    <div>
      <DeliverySelector setDelivery={setDelivery} delivery={delivery} />
      <OrderForm selected={delivery} />
    </div>
  );
};
