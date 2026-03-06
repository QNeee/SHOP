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
import { useEffect, useState, type FC } from 'react';
import { OldPrice, Price } from '../Products/ProductCard.styled';
import type { LocalStorageItemCategory, ProductItem } from '../../types';
import { sharesPhoto } from '../../assets/Shares/Shares';
import { BasketCard } from './BasketCard';
interface IBasketProps {
  items: LocalStorageItemCategory;
}
export const Basket: FC<IBasketProps> = ({ items }) => {
  const [renderItems, setRenderItems] = useState<ProductItem[]>([]);
  const [total, setTotal] = useState({ total: 0, totalWithDiscount: 0 });
  useEffect(() => {
    const keys = Object.values(items).flatMap((item) => Object.keys(item));
    const data = sharesPhoto.filter((it) => keys.includes(it.id));
    setRenderItems(data);
  }, [items]);
  useEffect(() => {
    const totalPrice = renderItems.reduce((acc, item) => (acc += item.price), 0);
    const totalPriceWithDiscount = renderItems.reduce(
      (acc, item) => acc + Number(discountCalculate(item.price, item.discount)),
      0,
    );
    const totalObj = {
      total: totalPrice,
      totalWithDiscount: totalPriceWithDiscount,
    };
    setTotal(totalObj);
  }, [renderItems]);
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
      {renderItems.map((item) => (
        <BasketCard item={item} key={item.id} />
      ))}
      <TotalContainer>
        <TotalText>Всього :</TotalText>
        <TotalPrizeContainer>
          <Price>{total.total}</Price>
          <OldPrice>{total.totalWithDiscount}</OldPrice>
        </TotalPrizeContainer>
      </TotalContainer>
      <BasketButton onClick={() => navigate(Paths.order)}>Оформити замовлення</BasketButton>
    </div>
  );
};
