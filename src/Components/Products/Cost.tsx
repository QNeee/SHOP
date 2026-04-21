import type { FC } from 'react';
import { discountCalculate, valute } from '../../Helper';
import { CostContainer, OldPrice, Price } from './Cost.styled';
interface ICost {
  itemPrice: number;
  itemDiscountPercentage: number | null;
}
export const Cost: FC<ICost> = ({ itemPrice, itemDiscountPercentage }) => {
  return (
    <CostContainer>
      <Price>{itemPrice + valute}</Price>
      {itemDiscountPercentage ? (
        <OldPrice>
          {discountCalculate(itemPrice, itemDiscountPercentage) + valute}
        </OldPrice>
      ) : null}
    </CostContainer>
  );
};
