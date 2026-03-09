import type { FC } from 'react';
import type { TotalObj } from '../../../types';
import { OldPrice, Price, TotalContainer, TotalPrizeContainer, TotalText } from './Total.styled';
interface ITotalProps {
  total: TotalObj;
  marginLeft?: string;
}
export const Total: FC<ITotalProps> = ({ total }) => {
  return (
    <TotalContainer>
      <TotalText>Всього :</TotalText>
      <TotalPrizeContainer>
        <Price>{total.total + total.valute}</Price>
        <OldPrice style={{ marginLeft: '8px' }}>{total.totalWithDiscount + total.valute}</OldPrice>
      </TotalPrizeContainer>
    </TotalContainer>
  );
};
