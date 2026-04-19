import { type FC } from 'react';
import { Basket } from '../Components/Basket/Basket';
import type { LocalStorageItemShopCategory, Ordered } from '../types';
import { getProductsBasketItems } from '../Redux/products/productsSelectors';
import { useSelector } from 'react-redux';
interface IBasketPageProps {
  onClickDeleteAll: () => void;
  onClickDeleteOne: (id: string) => void;
  setLocalStorageItems: Function;
  checkedItems: Record<string, boolean>;
  setCheckedItems: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
  baket: LocalStorageItemShopCategory;
}
export const BasketPage: FC<IBasketPageProps> = ({
  onClickDeleteAll,
  onClickDeleteOne,
  setLocalStorageItems,
  checkedItems,
  setCheckedItems,
  setOrdered,
}) => {
  const items = useSelector(getProductsBasketItems);
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
