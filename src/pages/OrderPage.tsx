import type { FC } from 'react';
import { Order } from '../Components/Order/Order';
import type { DataForm } from '../types';

interface IOrderPageProps {
  form: DataForm;
  setForm: React.Dispatch<React.SetStateAction<DataForm>>;
}
export const OrderPage: FC<IOrderPageProps> = ({ form, setForm }) => {
  return <Order setForm={setForm} form={form} />;
};
