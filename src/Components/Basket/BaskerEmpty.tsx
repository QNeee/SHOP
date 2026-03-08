import type { NavigateFunction } from 'react-router-dom';
import { BasketButton } from './Basket.styled';
import { BasketEmptyContainer } from './BasketEmpty.styled';
import type { FC } from 'react';
import { Paths } from '../../Helper';
interface IBasketEmptyProps {
  navigate: NavigateFunction;
}
export const BasketEmpty: FC<IBasketEmptyProps> = ({ navigate }) => {
  const imgUrl =
    'https://i.postimg.cc/W3JZYsLp/izobrazenie-2026-03-07-170519968-removebg-preview.png';
  return (
    <>
      <BasketEmptyContainer>
        <h3>Ваша корзина пуста</h3>
        <img src={imgUrl} alt="empty" />
        <p>Додайте товари із каталога</p>
        <BasketButton onClick={() => navigate(Paths.catalog)}>Перейти в каталог</BasketButton>
      </BasketEmptyContainer>
    </>
  );
};
