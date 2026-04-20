import type { FC } from 'react';
import {
  ProductTextContainer,
  ProductSection,
  ProductText,
} from './Products.styled';
import { ProductCard } from './ProductCard';
import { GenericCarousel } from '../Generic/GenericCarousel/GenericCarousel';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSharesLodaing } from '../../Redux/products/productsSelectors';
import { SkeletonShares } from '../Generic/Loader/Skeleton/SkeletonShares/SkeletonShares';
interface IProductsProps {
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClickCarousel: (e: React.MouseEvent<SVGSVGElement>) => void;
  items: ProductItem[];
  headerTitle: string;
  id: string;
}

export const Products: FC<IProductsProps> = ({
  favorite,
  onClickCarousel,
  carouselRef,
  items,
  headerTitle,
  id,
  onClickAdd,
  baket,
}) => {
  const { pathname } = useLocation();
  const loading = useSelector(getSharesLodaing);
  return (
    <>
      <ProductSection $pathname={pathname}>
        <ProductTextContainer>
          <ProductText>{headerTitle}</ProductText>
        </ProductTextContainer>
        <GenericCarousel
          id={id}
          carouselRef={carouselRef}
          onClick={onClickCarousel}
        >
          {!loading ? (
            <>
              {items.map((item) => (
                <ProductCard
                  onClickAdd={onClickAdd}
                  key={item.productVariantId}
                  item={item}
                  favorite={favorite}
                  baket={baket}
                />
              ))}
            </>
          ) : (
            <SkeletonShares />
          )}
        </GenericCarousel>
      </ProductSection>
    </>
  );
};
