import type { FC } from 'react';
import { Basket } from '../Components/Basket/Basket';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import { basket, main } from '../Helper';
import type {
  CheckedItem,
  DeletedItemFromBaket,
  LocalStorageItemCategory,
  TotalObj,
} from '../types';
interface IBasketPageProps {
  items: LocalStorageItemCategory;
  onClickDeleteAll: (data: CheckedItem[]) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
  setLocalStorageItems: Function;
  setTotalObj: React.Dispatch<React.SetStateAction<TotalObj>>;
}
export const BasketPage: FC<IBasketPageProps> = ({
  items,
  onClickDeleteAll,
  onClickDeleteOne,
  setLocalStorageItems,
  setTotalObj,
}) => {
  const basketPath = `${main} / ${basket}`;
  return (
    <GenericRoute path={basketPath} title={basket}>
      <Basket
        setTotalObj={setTotalObj}
        setLocalStorageItems={setLocalStorageItems}
        items={items}
        onClickDeleteAll={onClickDeleteAll}
        onClickDeleteOne={onClickDeleteOne}
      ></Basket>
    </GenericRoute>
  );
};
