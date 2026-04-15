import type { FC } from 'react';
import { discountCalculate, valute } from '../../Helper';
import { CostContainer, OldPrice, Price } from './Cost.styled';
interface ICost {
  itemPrice: number;
  itemDiscountPercentage: number;
}
export const Cost: FC<ICost> = ({ itemPrice, itemDiscountPercentage }) => {
  return (
    <CostContainer>
      <Price>{itemPrice + valute}</Price>
      <OldPrice>
        {discountCalculate(itemPrice, itemDiscountPercentage) + valute}
      </OldPrice>
    </CostContainer>
  );
};
