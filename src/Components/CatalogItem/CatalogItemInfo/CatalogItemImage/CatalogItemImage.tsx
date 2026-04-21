import type { FC } from 'react';
import { ImageGenericContainer } from '../../../Generic/ImageGenericContainer/ImageGeneticContainer';
import { DiscountContainer } from '../../../Products/ProductCard.styled';
import { ImageContainer } from './CatalogItemImage.styled';
interface ICatalogItemImage {
  title: string;
  discountPercentage: number | null;
  images: Record<string, string[]>;
}
export const CatalogItemImage: FC<ICatalogItemImage> = ({
  title,
  images,
  discountPercentage,
}) => {
  return (
    <ImageContainer onClick={(e) => e.stopPropagation()}>
      <ImageGenericContainer title={title} itemPhotos={images} />
      {discountPercentage != null ? (
        <DiscountContainer>-{discountPercentage}%</DiscountContainer>
      ) : null}
    </ImageContainer>
  );
};
