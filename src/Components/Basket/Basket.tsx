import { useNavigate } from 'react-router-dom';
import { discountCalculate, Paths } from '../../Helper';
import {
  BasketButton,
  BasketContainer,
  BasketIconContainer,
  BasketIconText,
  BasketWrapper,
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
import type {
  CheckedItem,
  DeletedItemFromBaket,
  LocalSorageObject,
  LocalStorageItemCategory,
  ProductItem,
} from '../../types';
import { sharesPhoto } from '../../assets/Shares/Shares';
import { BasketCard } from './BasketCard';
import { BasketEmpty } from './BaskerEmpty';
interface IBasketProps {
  items: LocalStorageItemCategory;
  onClickDeleteAll: (data: CheckedItem[]) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
  setLocalStorageItems: Function;
}
export const Basket: FC<IBasketProps> = ({
  items,
  onClickDeleteAll,
  onClickDeleteOne,
  setLocalStorageItems,
}) => {
  const [renderItems, setRenderItems] = useState<ProductItem[]>([]);
  const [total, setTotal] = useState({ total: 0, totalWithDiscount: 0 });

  useEffect(() => {
    const data = Object.keys(items).flatMap((k) => {
      const itemKey = items[k as keyof LocalStorageItemCategory];

      return sharesPhoto
        .filter((item) => item.id in itemKey)
        .map((item) => ({
          ...item,
          count: itemKey[item.id],
        }));
    });
    setRenderItems(data);
    const initialChecked: Record<string, boolean> = {};
    data.forEach((item) => {
      initialChecked[item.id] = false;
    });
    setCheckedItems(initialChecked);
    if (data.length === 0) {
      setCheckedItems({});
    }
  }, [items]);
  useEffect(() => {
    const totalPrice = renderItems.reduce((acc, item) => {
      const count = item.count ?? 1;
      return acc + item.price * count;
    }, 0);
    const totalPriceWithDiscount = renderItems.reduce((acc, item) => {
      const count = item.count ?? 1;
      return acc + Number(discountCalculate(item.price, item.discount)) * count;
    }, 0);
    const totalObj = {
      total: totalPrice,
      totalWithDiscount: totalPriceWithDiscount,
    };
    setTotal(totalObj);
  }, [renderItems]);
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const checkedAll =
    Object.keys(checkedItems).length > 0 && Object.values(checkedItems).every(Boolean);

  const toggleAll = (value: boolean) => {
    const newState: Record<string, boolean> = {};

    renderItems.forEach((item) => {
      newState[item.id] = value;
    });

    setCheckedItems(newState);
  };
  const toggleItem = (id: string, value: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div>
      {renderItems.length > 0 ? (
        <BasketWrapper>
          <BasketContainer>
            <BasketIconContainer
              $checked={checkedAll}
              onClick={() =>
                onClickDeleteAll(
                  renderItems
                    .filter((item) => checkedItems[item.id])
                    .map((item) => ({
                      smart: item.type === 'smart' ? item.id : undefined,
                      tv: item.type === 'tv' ? item.id : undefined,
                    })),
                )
              }
            >
              <BasketIcon />
              <BasketIconText>Видалити</BasketIconText>
            </BasketIconContainer>
            <InputContainer>
              <StyledLabel htmlFor="deleteAll">
                Вибрати все
                <InputCheckbox
                  checked={checkedAll}
                  onChange={(e) => toggleAll(e.target.checked)}
                  type="checkbox"
                  id="deleteAll"
                />
              </StyledLabel>
            </InputContainer>
          </BasketContainer>
          {renderItems.map((item) => (
            <BasketCard
              setLocalStorageItems={setLocalStorageItems}
              onClickDeleteOne={onClickDeleteOne}
              item={item}
              key={item.id}
              checked={!!checkedItems[item.id]}
              onChange={toggleItem}
            />
          ))}
          <TotalContainer>
            <TotalText>Всього :</TotalText>
            <TotalPrizeContainer>
              <Price>{total.total}</Price>
              <OldPrice>{total.totalWithDiscount}</OldPrice>
            </TotalPrizeContainer>
          </TotalContainer>
          <BasketButton onClick={() => navigate(Paths.order)}>Оформити замовлення</BasketButton>
        </BasketWrapper>
      ) : (
        <BasketEmpty navigate={navigate} />
      )}
    </div>
  );
};
