import type { NavigateFunction } from 'react-router-dom';
import { BasketButton } from './Basket.styled';
import { BasketEmptyContainer } from './BasketEmpty.styled';
import type { FC } from 'react';
import { initialOrdered, Paths } from '../../Helper';
import type { Ordered } from '../../types';
import { BasketEmptyIcon } from '../Generic/Icons/BasketEmptyIcon';
interface IBasketEmptyProps {
  navigate: NavigateFunction;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
}
export const BasketEmpty: FC<IBasketEmptyProps> = ({
  navigate,
  setOrdered,
}) => {
  return (
    <>
      <BasketEmptyContainer>
        <h3>Ваша корзина пуста</h3>
        <BasketEmptyIcon />
        <p>Додайте товари із каталога</p>
        <BasketButton
          onClick={() => {
            setOrdered(initialOrdered);
            navigate(Paths.catalog);
          }}
        >
          Перейти в каталог
        </BasketButton>
      </BasketEmptyContainer>
    </>
  );
};
