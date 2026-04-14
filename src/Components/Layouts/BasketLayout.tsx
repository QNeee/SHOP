import { Outlet, useLocation } from 'react-router-dom';
import { orderedMesages, Paths } from '../../Helper';
import { GenericRoute } from '../Generic/GenericRoute/GenericRoute';
import type { Ordered, TotalObj } from '../../types';
import { type FC } from 'react';
import { Total } from '../Generic/Total/Total';
import { BasketButton } from '../Basket/Basket.styled';
import { OrderAccept } from '../Order/OrderAccept/OrderAccept';
interface IBasketLayout {
  total: TotalObj;
  onClickToOrder: () => void;
  onSubmitOrderForm: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  basketLength: number;
  ordered: Ordered;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
}
export const BasketLayout: FC<IBasketLayout> = ({
  basketLength,
  total,
  onClickToOrder,
  onSubmitOrderForm,
  ordered,
  setOrdered,
}) => {
  const { pathname } = useLocation();
  const isBasket = pathname.replace(/\/$/, '') === Paths.basket;
  return (
    <>
      {!ordered.accepted ? (
        <GenericRoute>
          <>
            <Outlet />
            {basketLength ? <Total total={total}></Total> : null}

            {basketLength ? (
              <BasketButton
                type="submit"
                onClick={isBasket ? onClickToOrder : onSubmitOrderForm}
              >
                Оформити замовлення
              </BasketButton>
            ) : null}
          </>
        </GenericRoute>
      ) : (
        <OrderAccept
          setOrdered={setOrdered}
          message={orderedMesages[ordered.flag]}
          date={ordered.dateDelivery}
          time={ordered.timeDelivery}
        />
      )}
    </>
  );
};
