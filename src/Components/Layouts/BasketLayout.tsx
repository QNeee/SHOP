import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { basket, initialTotalObj, main, order, Paths } from '../../Helper';
import { GenericRoute } from '../Generic/GenericRoute/GenericRoute';
import type { TotalObj } from '../../types';
import { type FC } from 'react';
import { Total } from '../Generic/Total/Total';
import { BasketButton } from '../Basket/Basket.styled';
interface IBasketLayout {
  setTotal: React.Dispatch<React.SetStateAction<TotalObj>>;
  total: TotalObj;
}
export const BasketLayout: FC<IBasketLayout> = ({ setTotal, total }) => {
  const { pathname } = useLocation();
  const basketPath = `${main} / ${basket}`;
  const orderPath = `${main} / ${basket} / ${order}`;
  const path = pathname.replace(/\/$/, '') === Paths.basket ? basketPath : orderPath;
  const title = pathname.replace(/\/$/, '') === Paths.basket ? basket : order;
  const navigate = useNavigate();
  const onClickToOrder = () => {
    const totalObj = {
      total: total.total,
      totalWithDiscount: total.totalWithDiscount,
      valute: total.valute,
    };
    navigate(Paths.order);
    setTotal(totalObj);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const onClickToBuy = () => {
    setTotal(initialTotalObj);
  };

  return (
    <GenericRoute path={path} title={title}>
      <>
        <Outlet />
        <Total total={total}></Total>
        <BasketButton
          onClick={pathname.replace(/\/$/, '') === Paths.basket ? onClickToOrder : onClickToBuy}
        >
          Оформити замовлення
        </BasketButton>
      </>
    </GenericRoute>
  );
};
