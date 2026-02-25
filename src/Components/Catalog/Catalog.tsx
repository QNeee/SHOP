import { catalogPhotos } from '../../assets/Catalog/Catalog';
import { Carousel } from '../GenericCarousel.styled';
import { CatalogSection, CatalogWrapper, ImageContainer } from './Catalog.styled';

export const Catalog = () => {
  return (
    <>
      <h2>Каталог</h2>
      <CatalogSection>
        <Carousel>
          {catalogPhotos.map((item) => (
            <CatalogWrapper key={item.id}>
              <ImageContainer>
                <img width={38} height={78} src={item.item} alt={item.text} />
              </ImageContainer>
              <p>{item.text}</p>
            </CatalogWrapper>
          ))}
        </Carousel>
      </CatalogSection>
    </>
  );
};
