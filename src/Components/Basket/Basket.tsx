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
import type {
  CheckedItem,
  DeletedItemFromBaket,
  Ordered,
  SharesItem,
} from '../../types';
import { BasketCard } from './BasketCard';
import { BasketEmpty } from './BasketEmpty';
interface IBasketProps {
  items: SharesItem[];
  onClickDeleteAll: (data: CheckedItem[]) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
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
  const navigate = useNavigate();

  const checkedAll =
    Object.keys(checkedItems).length > 0 &&
    Object.values(checkedItems).every(Boolean);

  const toggleAll = (value: boolean) => {
    const newState: Record<string, boolean> = {};

    items.forEach((item) => {
      newState[item.productId] = value;
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
      {items.length > 0 ? (
        <BasketWrapper>
          <BasketContainer>
            <BasketIconContainer
              $checked={checkedAll}
              onClick={() =>
                onClickDeleteAll(
                  items
                    .filter((item) => checkedItems[item.productVariantId])
                    .map((item) => ({
                      1:
                        item.categoryId === 1
                          ? item.productVariantId
                          : undefined,
                      2:
                        item.categoryId === 2
                          ? item.productVariantId
                          : undefined,
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
      ) : (
        <BasketEmpty setOrdered={setOrdered} navigate={navigate} />
      )}
    </div>
  );
};
