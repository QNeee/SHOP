import { type FC } from 'react';
import { Products } from '../Products/Products';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import { SharesId } from '../../Helper';
interface IShared {
  baket: LocalStorageItemShopCategory;
  favorite: LocalStorageItemShopCategory;
  sharesRef: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  items: ProductItem[];
}
export const Shares: FC<IShared> = ({
  baket,
  favorite,
  sharesRef,
  onClickCarouselButton,
  onClickAdd,
  items,
}) => {
  const headerTitle = 'Акції';
  return (
    <>
      <Products
        baket={baket}
        favorite={favorite}
        carouselRef={sharesRef}
        onClickCarousel={onClickCarouselButton}
        items={items}
        headerTitle={headerTitle}
        id={SharesId}
        onClickAdd={onClickAdd}
      />
    </>
  );
};
