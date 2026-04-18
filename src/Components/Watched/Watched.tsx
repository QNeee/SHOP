import { type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import { Products } from '../Products/Products';
import { CanLikeId } from '../../Helper';

interface IWatched {
  baket: LocalStorageItemShopCategory;
  favorite: LocalStorageItemShopCategory;
  watchedRef: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  items: ProductItem[];
}
export const Watched: FC<IWatched> = ({
  baket,
  favorite,
  watchedRef,
  onClickAdd,
  onClickCarouselButton,
  items,
}) => {
  const headerTitle = 'Може сподобатись';
  return (
    <Products
      baket={baket}
      favorite={favorite}
      carouselRef={watchedRef}
      onClickCarousel={onClickCarouselButton}
      items={items}
      headerTitle={headerTitle}
      id={CanLikeId}
      onClickAdd={onClickAdd}
    />
  );
};
