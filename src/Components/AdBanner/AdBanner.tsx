import { AdSection } from './AdBanner.styled';
import { ADPhotos } from '../../assets/AD/AD';
import { Carousel, Slide } from '../GenericCarousel.styled';

export const AdBanner = () => {
  return (
    <AdSection>
      <Carousel>
        {ADPhotos.map((item) => (
          <Slide src={item.item} key={item.id} />
        ))}
      </Carousel>
    </AdSection>
  );
};
