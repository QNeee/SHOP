import { useState, type FC } from 'react';
import { DeliverySelector } from './DeliverySelector';
import { OrderForm } from './OderForm';
import { Courier, OrderSelectTitle } from '../../Helper';
import { DeliverySelect } from './DeliverySelect';
import { OrderContainer } from './OrderForm.styled';
import type { DataForm } from '../../types';

interface IOrderProps {
  form: DataForm;
  setForm: React.Dispatch<React.SetStateAction<DataForm>>;
}
export const Order: FC<IOrderProps> = ({ form, setForm }) => {
  const [delivery, setDelivery] = useState(Courier.key);

  const [selected, setSelected] = useState(OrderSelectTitle.courier);
  const [open, setOpen] = useState(false);
  return (
    <OrderContainer>
      <DeliverySelector
        setSelected={setSelected}
        setOpen={setOpen}
        setDelivery={setDelivery}
        delivery={delivery}
      />
      <DeliverySelect
        open={open}
        setOpen={setOpen}
        delivery={delivery}
        selected={selected}
        setSelected={setSelected}
      />
      <OrderForm selected={delivery} setForm={setForm} form={form} />
    </OrderContainer>
  );
};
