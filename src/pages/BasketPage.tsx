import { useEffect, type FC } from 'react';
import { Basket } from '../Components/Basket/Basket';
import type {
  CheckedItem,
  DeletedItemFromBaket,
  LocalStorageItemShopCategory,
  Ordered,
} from '../types';
import type { AppDispatch } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasketProducts } from '../Redux/products/productsOperations';
import { getProductsBasketItems } from '../Redux/products/productsSelectors';
interface IBasketPageProps {
  onClickDeleteAll: (data: CheckedItem[]) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
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
  baket,
}) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (items.length === 0) {
      const basketIdsItems = Object.values(baket).flatMap((category) =>
        Object.keys(category),
      );
      dispatch(fetchBasketProducts(basketIdsItems));
    }
  }, []);
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
