import { useState } from 'react';
import { DeliverySelector } from './DeliverySelector';
import { OrderForm } from './OderForm';
import { Courier } from '../../Helper';

export const Order = () => {
  const [delivery, setDelivery] = useState(Courier.key);
  return (
    <>
      <DeliverySelector setDelivery={setDelivery} delivery={delivery} />
      <OrderForm selected={delivery} />
    </>
  );
};
