import type { FC } from 'react';
import { ProductTextContainer, ProductSection, ProductText } from './Products.styled';
import { ProductCard } from './ProductCard';
import { GenericCarousel } from '../GenericCarousel';
import type { FavoriteObject, ProductItem } from '../../types';
interface IProductsProps {
  onClickFavorite: (obj: FavoriteObject) => void;
  favorite: string[];
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  items: ProductItem[];
  headerTitle: string;
  id: string;
}

export const Products: FC<IProductsProps> = ({
  onClickFavorite,
  favorite,
  onClick,
  carouselRef,
  items,
  headerTitle,
  id,
}) => {
  return (
    <>
      <ProductSection>
        <ProductTextContainer>
          <ProductText>{headerTitle}</ProductText>
        </ProductTextContainer>
        <GenericCarousel id={id} carouselRef={carouselRef} onClick={onClick}>
          <>
            {items.map((item) => (
              <ProductCard
                id={id}
                key={item.id}
                item={item}
                onClickFavorite={onClickFavorite}
                favorite={favorite}
              />
            ))}
          </>
        </GenericCarousel>
      </ProductSection>
    </>
  );
};
