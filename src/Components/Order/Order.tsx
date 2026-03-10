import { useState, type FC } from 'react';
import { DeliverySelector } from './DeliverySelector/DeliverySelector';
import { OrderForm } from './OderForm/OderForm';
import { Courier, OrderSelectTitle } from '../../Helper';
import { DeliverySelect } from './DeliverySelect/DeliverySelect';
import { OrderContainer } from './OderForm/OrderForm.styled';
import type { DataForm } from '../../types';
import type { FormAction } from './formReducer';

interface IOrderProps {
  form: DataForm;
  dispatch: (action: FormAction) => void;
  submit: boolean;
}
export const Order: FC<IOrderProps> = ({ form, dispatch, submit }) => {
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
      <OrderForm submit={submit} selected={delivery} dispatch={dispatch} form={form} />
    </OrderContainer>
  );
};
