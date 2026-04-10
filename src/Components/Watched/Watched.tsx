import { useEffect, type FC } from 'react';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
} from '../../types';
import { Products } from '../Products/Products';
import { CanLikeId } from '../../Helper';
import { fetchShares } from '../../Redux/shares/sharesOperations';
import type { AppDispatch } from '../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getSharesItems } from '../../Redux/shares/sharesSelectors';

interface IWatched {
  baket: LocalStorageItemShopCategory;
  favorite: LocalStorageItemShopCategory;
  watchedRef: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  onClick: (obj: LocalSorageObject) => void;
}
export const Watched: FC<IWatched> = ({
  baket,
  favorite,
  watchedRef,
  onClick,
  onClickCarouselButton,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector(getSharesItems);
  useEffect(() => {
    dispatch(fetchShares());
  }, []);
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
      onClick={onClick}
    />
  );
};
