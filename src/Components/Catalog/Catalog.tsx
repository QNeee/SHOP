import type { FC } from 'react';
import { catalogPhotos } from '../../assets/Catalog/Catalog';
import { CatalogSection, CatalogText } from './Catalog.styled';
import { CatalogCard } from './CatalogCard';
import { GenericCarousel } from '../Generic/GenericCarousel/GenericCarousel';
import { CatalogId } from '../../Helper';
interface ICatalogProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
}
export const Catalog: FC<ICatalogProps> = ({ carouselRef, onClick }) => {
  return (
    <>
      <CatalogSection>
        <CatalogText>Каталог</CatalogText>
        <GenericCarousel
          id={CatalogId}
          carouselRef={carouselRef}
          onClick={onClick}
        >
          <>
            {catalogPhotos.map((item) => (
              <CatalogCard key={item.id} item={item} />
            ))}
          </>
        </GenericCarousel>
      </CatalogSection>
    </>
  );
};
