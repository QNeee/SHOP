import type { FC } from 'react';
import { InfoPriceContainer, PriceContainer } from './PriceInfo.styled';
import { OldPrice, Price } from '../../../../Products/Cost.styled';
import { discountCalculate } from '../../../../../Helper';

interface IPriceInfo {
  title: string;
  price: number;
  discountPercentage?: number;
}
export const PriceInfo: FC<IPriceInfo> = ({
  title,
  price,
  discountPercentage,
}) => {
  return (
    <InfoPriceContainer>
      <p>{title}</p>
      <PriceContainer>
        <Price>{price + '$'}</Price>
        {discountPercentage ? (
          <OldPrice style={{ marginTop: '5px', marginLeft: '8px' }}>
            {discountCalculate(price, discountPercentage as number) + '$'}
          </OldPrice>
        ) : null}
      </PriceContainer>
    </InfoPriceContainer>
  );
};
