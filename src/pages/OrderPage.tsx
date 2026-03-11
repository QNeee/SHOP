import type { FC } from 'react';
import { Order } from '../Components/Order/Order';
import type { CheckFormOrder, DataForm } from '../types';
import type { FormAction } from '../Components/Order/formReducer';

interface IOrderPageProps {
  submit: boolean;
  form: DataForm;
  dispatch: React.ActionDispatch<[action: FormAction]>;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}
export const OrderPage: FC<IOrderPageProps> = ({ submit, form, dispatch, setCheckFormOrdr }) => {
  return (
    <Order setCheckFormOrdr={setCheckFormOrdr} form={form} dispatch={dispatch} submit={submit} />
  );
};
