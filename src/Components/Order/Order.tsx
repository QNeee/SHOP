import { useEffect, useState, type FC } from 'react';
import { DeliverySelector } from './DeliverySelector/DeliverySelector';
import { OrderForm } from './OderForm/OderForm';
import { Courier, OrderSelectTitle } from '../../Helper';
import { DeliverySelect } from './DeliverySelect/DeliverySelect';
import { OrderContainer } from './OderForm/OrderForm.styled';
import type { CheckFormOrder, DataForm } from '../../types';
import type { FormAction } from './formReducer';

interface IOrderProps {
  submit: boolean;
  form: DataForm;
  dispatch: React.ActionDispatch<[action: FormAction]>;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}
export const Order: FC<IOrderProps> = ({ submit, form, dispatch, setCheckFormOrdr }) => {
  const [delivery, setDelivery] = useState(Courier.key);
  const [selected, setSelected] = useState(OrderSelectTitle.courier);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const section = 'deliveryType' as keyof DataForm;
    const field = 'name';

    dispatch({
      type: 'SET_FIELD',
      section,
      field,
      value: delivery,
    });
  }, [delivery]);

  useEffect(() => {});
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
      <OrderForm
        setCheckFormOrdr={setCheckFormOrdr}
        form={form}
        dispatch={dispatch}
        submit={submit}
        selected={delivery}
      />
    </OrderContainer>
  );
};
