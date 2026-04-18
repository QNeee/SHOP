import { type FC } from 'react';
import { Products } from '../Products/Products';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import { SharesId } from '../../Helper';
import { useSelector } from 'react-redux';
import { Loader } from '../Generic/Loader/Loader';
import { getProdutsLodaing } from '../../Redux/products/productsSelectors';
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
  const sharesLoading = useSelector(getProdutsLodaing);
  const headerTitle = 'Акції';
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
