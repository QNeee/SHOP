import { Outlet, useLocation } from 'react-router-dom';
import { basket, main, order, Paths } from '../../Helper';
import { GenericRoute } from '../Generic/GenericRoute/GenericRoute';
import type { TotalObj } from '../../types';
import { type FC } from 'react';
import { Total } from '../Generic/Total/Total';
import { BasketButton } from '../Basket/Basket.styled';
interface IBasketLayout {
  total: TotalObj;
  onClickToOrder: () => void;
  onSubmitOrderForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  basketLength: number;
}
export const BasketLayout: FC<IBasketLayout> = ({
  basketLength,
  total,
  onClickToOrder,
  onSubmitOrderForm,
}) => {
  const { pathname } = useLocation();
  const basketPath = `${main} / ${basket}`;
  const orderPath = `${main} / ${basket} / ${order}`;
  const isBasket = pathname.replace(/\/$/, '') === Paths.basket;
  const path = isBasket ? basketPath : orderPath;
  const title = isBasket ? basket : order;

  return (
    <GenericRoute path={path} title={title}>
      <>
        <Outlet />
        <Total total={total}></Total>

        {basketLength ? (
          <BasketButton type="submit" onClick={isBasket ? onClickToOrder : onSubmitOrderForm}>
            Оформити замовлення
          </BasketButton>
        ) : null}
      </>
    </GenericRoute>
  );
};
