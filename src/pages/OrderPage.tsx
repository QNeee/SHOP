import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { basket, main, order } from '../Helper';

export const OrderPage = () => {
  const orderPath = `${main} / ${basket} / ${order}`;
  return (
    <GenericRoute path={orderPath} title={order}>
      <></>
    </GenericRoute>
  );
};
