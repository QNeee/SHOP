import type { FC } from 'react';
import { ProductTextContainer, ProductSection, ProductText } from './Products.styled';
import { ProductCard } from './ProductCard';
import { GenericCarousel } from '../Generic/GenericCarousel/GenericCarousel';
import type { LocalSorageObject, LocalStorageItemShopCategory, ProductItem } from '../../types';
import { useLocation } from 'react-router-dom';
interface IProductsProps {
  onClick: (obj: LocalSorageObject) => void;
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
  onClick,
  baket,
}) => {
  const { pathname } = useLocation();
  return (
    <>
      <ProductSection $pathname={pathname}>
        <ProductTextContainer>
          <ProductText>{headerTitle}</ProductText>
        </ProductTextContainer>
        <GenericCarousel id={id} carouselRef={carouselRef} onClick={onClickCarousel}>
          <>
            {items.map((item) => (
              <ProductCard
                onClick={onClick}
                id={id}
                key={item.id}
                item={item}
                favorite={favorite}
                baket={baket}
              />
            ))}
          </>
        </GenericCarousel>
      </ProductSection>
    </>
  );
};
