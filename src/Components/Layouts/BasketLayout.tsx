import { Outlet, useLocation } from 'react-router-dom';
import { basket, main, order, orderedMesages, Paths } from '../../Helper';
import { GenericRoute } from '../Generic/GenericRoute/GenericRoute';
import type { Ordered, TotalObj } from '../../types';
import { type FC } from 'react';
import { Total } from '../Generic/Total/Total';
import { BasketButton } from '../Basket/Basket.styled';
import { OrderAccept } from '../Order/OrderAccept/OrderAccept';
interface IBasketLayout {
  total: TotalObj;
  onClickToOrder: () => void;
  onSubmitOrderForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  basketLength: number;
  ordered: Ordered
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>
}
export const BasketLayout: FC<IBasketLayout> = ({
  basketLength,
  total,
  onClickToOrder,
  onSubmitOrderForm,
  ordered,
  setOrdered
}) => {
  const { pathname } = useLocation();
  const basketPath = `${main} / ${basket}`;
  const orderPath = `${main} / ${basket} / ${order}`;
  const isBasket = pathname.replace(/\/$/, '') === Paths.basket;
  const path = isBasket ? basketPath : orderPath;
  const title = isBasket ? basket : order;
  return (
    <>
      {!ordered.accepted ? <GenericRoute path={path} title={title}>
        <>
          <Outlet />
          {basketLength ? <Total total={total}></Total> : null}

          {basketLength ? (
            <BasketButton type="submit" onClick={isBasket ? onClickToOrder : onSubmitOrderForm}>
              Оформити замовлення
            </BasketButton>
          ) : null}
        </>
      </GenericRoute> : <OrderAccept setOrdered={setOrdered} message={orderedMesages[ordered.flag]} date={ordered.dateDelivery} time={ordered.timeDelivery} />}
    </>
  );
};
