import type { FC } from 'react';
import { Order } from '../Components/Order/Order';

interface IOrderPageProps {}
export const OrderPage: FC<IOrderPageProps> = () => {
  return <Order />;
};
