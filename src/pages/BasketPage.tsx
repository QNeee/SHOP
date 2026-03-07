import type { FC } from 'react';
import { Basket } from '../Components/Basket/Basket';
import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { basket, main } from '../Helper';
import type {
  CheckedItem,
  DeletedItemFromBaket,
  LocalSorageObject,
  LocalStorageItemCategory,
} from '../types';
interface IBasketPageProps {
  items: LocalStorageItemCategory;
  onClickDeleteAll: (data: CheckedItem[]) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
  setLocalStorageItems: Function;
  onClick: (obj: LocalSorageObject) => void;
  carouselsRefs: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  favorite: LocalStorageItemCategory;
  baket: LocalStorageItemCategory;
}
export const BasketPage: FC<IBasketPageProps> = ({
  items,
  onClickDeleteAll,
  onClickDeleteOne,
  setLocalStorageItems,
  onClick,
  onClickCarouselButton,
  carouselsRefs,
  favorite,
  baket,
}) => {
  const basketPath = `${main} / ${basket}`;
  return (
    <GenericRoute path={basketPath} title={basket}>
      <Basket
        favorite={favorite}
        baket={baket}
        onClick={onClick}
        carouselsRefs={carouselsRefs}
        onClickCarouselButton={onClickCarouselButton}
        setLocalStorageItems={setLocalStorageItems}
        items={items}
        onClickDeleteAll={onClickDeleteAll}
        onClickDeleteOne={onClickDeleteOne}
      ></Basket>
    </GenericRoute>
  );
};
