import type { FC } from 'react';
import { Order } from '../Components/Order/Order';
import type { DataForm } from '../types';
import type { FormAction } from '../Components/Order/formReducer';

interface IOrderPageProps {
  form: DataForm;
  dispatch: (action: FormAction) => void;
}
export const OrderPage: FC<IOrderPageProps> = ({ form, dispatch }) => {
  return <Order dispatch={dispatch} form={form} />;
};
