import type { FC } from 'react';
import { Order } from '../Components/Order/Order';
import type { DataForm } from '../types';
import type { FormAction } from '../Components/Order/formReducer';

interface IOrderPageProps {
  form: DataForm;
  dispatch: (action: FormAction) => void;
  submit: boolean;
}
export const OrderPage: FC<IOrderPageProps> = ({ submit, form, dispatch }) => {
  return <Order submit={submit} dispatch={dispatch} form={form} />;
};
