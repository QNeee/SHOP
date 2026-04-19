import { useNavigate } from 'react-router-dom';

import {
  BasketContainer,
  BasketIconContainer,
  BasketIconText,
  BasketWrapper,
  InputCheckbox,
  InputContainer,
  StyledLabel,
} from './Basket.styled';
import { BasketIcon } from '../Generic/Icons/BasketIcon';
import { type FC } from 'react';
import type { Ordered, ProductItem } from '../../types';
import { BasketCard } from './BasketCard';
import { BasketEmpty } from './BasketEmpty';
import { Loader } from '../Generic/Loader/Loader';
import { useSelector } from 'react-redux';
import { getBasketLoading } from '../../Redux/products/productsSelectors';
interface IBasketProps {
  items: ProductItem[];
  onClickDeleteAll: () => void;
  onClickDeleteOne: (id: string) => void;
  setLocalStorageItems: Function;
  checkedItems: Record<string, boolean>;
  setCheckedItems: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
}
export const Basket: FC<IBasketProps> = ({
  items,
  onClickDeleteAll,
  onClickDeleteOne,
  setLocalStorageItems,
  checkedItems,
  setCheckedItems,
  setOrdered,
}) => {
  const basketLoading = useSelector(getBasketLoading);
  const navigate = useNavigate();
  const checkedAll =
    Object.keys(checkedItems).length > 0 &&
    Object.values(checkedItems).every(Boolean);

  const toggleAll = (value: boolean) => {
    const newState: Record<string, boolean> = {};

    items.forEach((item) => {
      newState[item.productVariantId] = value;
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
    <div style={{ marginBottom: '20px' }}>
      {items.length > 0 && !basketLoading ? (
        <BasketWrapper>
          <BasketContainer>
            <BasketIconContainer
              $checked={checkedAll}
              onClick={onClickDeleteAll}
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
          {items.map((item) => (
            <BasketCard
              setLocalStorageItems={setLocalStorageItems}
              onClickDeleteOne={onClickDeleteOne}
              item={item}
              key={item.productVariantId}
              checked={!!checkedItems[item.productVariantId]}
              onChange={toggleItem}
            />
          ))}
        </BasketWrapper>
      ) : items.length === 0 && !basketLoading ? (
        <BasketEmpty setOrdered={setOrdered} navigate={navigate} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
