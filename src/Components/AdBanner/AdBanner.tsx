import { AdSection } from './AdBanner.styled';
import { ADPhotos } from '../../assets/AD/AD';
import { Slide } from '../GenericCarousel.styled';
import type { FC } from 'react';
import { GenericCarousel } from '../GenericCarousel';
import { AdBannerId } from '../../Helper';
interface IAdBannerProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
}
export const AdBanner: FC<IAdBannerProps> = ({ carouselRef, onClick }) => {
  return (
    <AdSection>
      <GenericCarousel carouselRef={carouselRef} onClick={onClick} id={AdBannerId}>
        <>
          {ADPhotos.map((item) => (
            <Slide src={item.item} key={item.id} />
          ))}
        </>
      </GenericCarousel>
    </AdSection>
  );
};
