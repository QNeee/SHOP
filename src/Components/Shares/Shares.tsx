import { useEffect, type FC } from 'react';
import { Products } from '../Products/Products';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import { SharesId } from '../../Helper';
import { useDispatch, useSelector } from 'react-redux';
import { getSharesLodaing } from '../../Redux/shares/sharesSelectors';
import { fetchShares } from '../../Redux/shares/sharesOperations';
import type { AppDispatch } from '../../Redux/store';
import { Loader } from '../Generic/Loader/Loader';
interface IShared {
  baket: LocalStorageItemShopCategory;
  favorite: LocalStorageItemShopCategory;
  sharesRef: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  onClick: (obj: LocalSorageObject) => void;
  items: ProductItem[];
}
export const Shares: FC<IShared> = ({
  baket,
  favorite,
  sharesRef,
  onClickCarouselButton,
  onClick,
  items,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const sharesLoading = useSelector(getSharesLodaing);
  const headerTitle = 'Акції';
  useEffect(() => {
    dispatch(fetchShares());
  }, []);
  return (
    <>
      {sharesLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
