import { useEffect, type FC } from 'react';
import { Products } from '../Products/Products';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
} from '../../types';
import { SharesId } from '../../Helper';
import { useDispatch, useSelector } from 'react-redux';
import { getSharesItems } from '../../Redux/shares/sharesSelectors';
import { fetchShares } from '../../Redux/shares/sharesOperations';
import type { AppDispatch } from '../../Redux/store';
interface IShared {
  baket: LocalStorageItemShopCategory;
  favorite: LocalStorageItemShopCategory;
  sharesRef: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  onClick: (obj: LocalSorageObject) => void;
}
export const Shares: FC<IShared> = ({
  baket,
  favorite,
  sharesRef,
  onClickCarouselButton,
  onClick,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector(getSharesItems);
  const headerTitle = 'Акції';
  useEffect(() => {
    dispatch(fetchShares());
  }, []);
  return (
    <Products
      baket={baket}
      favorite={favorite}
      carouselRef={sharesRef}
      onClickCarousel={onClickCarouselButton}
      items={items}
      headerTitle={headerTitle}
      id={SharesId}
      onClick={onClick}
    />
  );
};
