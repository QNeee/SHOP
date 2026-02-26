import { catalogPhotos } from '../../assets/Catalog/Catalog';
import { Carousel } from '../GenericCarousel.styled';
import { CatalogSection, CatalogText } from './Catalog.styled';
import { CatalogCard } from './CatalogCard';

export const Catalog = () => {
  return (
    <>
      <CatalogText>Каталог</CatalogText>
      <CatalogSection>
        <Carousel>
          {catalogPhotos.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </Carousel>
      </CatalogSection>
    </>
  );
};
