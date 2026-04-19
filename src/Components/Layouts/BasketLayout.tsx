import { Outlet, useLocation } from 'react-router-dom';
import { discountCalculate, orderedMesages, Paths, valute } from '../../Helper';
import { GenericRoute } from '../Generic/GenericRoute/GenericRoute';
import type { Ordered, TotalObj } from '../../types';
import { useEffect, type FC } from 'react';
import { Total } from '../Generic/Total/Total';
import { BasketButton } from '../Basket/Basket.styled';
import { OrderAccept } from '../Order/OrderAccept/OrderAccept';
import { useSelector } from 'react-redux';
import { getProductsBasketItems } from '../../Redux/products/productsSelectors';
interface IBasketLayout {
  total: TotalObj;
  onClickToOrder: () => void;
  onSubmitOrderForm: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  basketLength: number;
  ordered: Ordered;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
  setTotal: React.Dispatch<React.SetStateAction<TotalObj>>;
}
export const BasketLayout: FC<IBasketLayout> = ({
  basketLength,
  total,
  onClickToOrder,
  onSubmitOrderForm,
  ordered,
  setOrdered,
  setTotal,
}) => {
  const { pathname } = useLocation();
  const isBasket = pathname.replace(/\/$/, '') === Paths.basket;
  const basketData = useSelector(getProductsBasketItems);
  useEffect(() => {
    const totalPrice = basketData.reduce((acc, item) => {
      const count = item.count ?? 1;
      return acc + item.price * count;
    }, 0);
    const totalPriceWithDiscount = basketData.reduce((acc, item) => {
      const count = item.count ?? 1;
      return (
        acc +
        Number(discountCalculate(item.price, item.discountPercentage)) * count
      );
    }, 0);
    const totalObj = {
      total: totalPrice,
      totalWithDiscount: totalPriceWithDiscount,
      valute,
    };
    setTotal(totalObj);
  }, [basketData]);
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
                style={{ marginBottom: '20px' }}
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
