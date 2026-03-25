import type { FC } from 'react';
import { Basket } from '../Components/Basket/Basket';
import type { CheckedItem, DeletedItemFromBaket, Ordered, ProductItem } from '../types';
interface IBasketPageProps {
  items: ProductItem[];
  onClickDeleteAll: (data: CheckedItem[]) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
  setLocalStorageItems: Function;
  checkedItems: Record<string, boolean>;
  setCheckedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
}
export const BasketPage: FC<IBasketPageProps> = ({
  items,
  onClickDeleteAll,
  onClickDeleteOne,
  setLocalStorageItems,
  checkedItems,
  setCheckedItems,
  setOrdered,
}) => {
  return (
    <Basket
      setOrdered={setOrdered}
      setLocalStorageItems={setLocalStorageItems}
      items={items}
      onClickDeleteAll={onClickDeleteAll}
      onClickDeleteOne={onClickDeleteOne}
      checkedItems={checkedItems}
      setCheckedItems={setCheckedItems}
    ></Basket>
  );
};
