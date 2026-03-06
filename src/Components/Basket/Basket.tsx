import { useNavigate } from 'react-router-dom';
import { discountCalculate, Paths } from '../../Helper';
import {
  BasketButton,
  BasketContainer,
  BasketIconContainer,
  BasketIconText,
  InputCheckbox,
  InputContainer,
  StyledLabel,
  TotalContainer,
  TotalPrizeContainer,
  TotalText,
} from './Basket.styled';
import { BasketIcon } from './BasketIcon';
import { useState, type FC } from 'react';
import { OldPrice, Price } from '../Products/ProductCard.styled';
import type { ProductItem } from '../../types';
interface IBasketProps {
  item: ProductItem;
}
export const Basket: FC<IBasketProps> = ({ item }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const onClick = () => {
    console.log('click');
  };
  return (
    <div>
      <BasketContainer>
        <BasketIconContainer $checked={checked} onClick={onClick}>
          <BasketIcon />
          <BasketIconText>Видалити</BasketIconText>
        </BasketIconContainer>
        <InputContainer>
          <StyledLabel htmlFor="deleteAll">
            Вибрати все
            <InputCheckbox
              checked={checked}
              onChange={handleChange}
              type="checkbox"
              id="deleteAll"
            />
          </StyledLabel>
        </InputContainer>
      </BasketContainer>
      <TotalContainer>
        <TotalText>Всього :</TotalText>
        <TotalPrizeContainer>
          <Price>{item.price + item.valute}</Price>
          <OldPrice>{discountCalculate(item.price, item.discount, item.valute)}</OldPrice>
        </TotalPrizeContainer>
      </TotalContainer>
      <BasketButton onClick={() => navigate(Paths.order)}>Оформити замовлення</BasketButton>
    </div>
  );
};
