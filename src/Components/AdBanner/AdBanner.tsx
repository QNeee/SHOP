import { AdSection } from './AdBanner.styled';
import { ADPhotos } from '../../assets/AD/AD';
import { Slide } from '../Generic/GenericCarousel/GenericCarousel.styled';
import type { FC } from 'react';
import { GenericCarousel } from '../Generic/GenericCarousel/GenericCarousel';
import { AdBannerId, isDesktop, isMobile, useIsmobileWidth } from '../../Helper';
interface IAdBannerProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
}
export const AdBanner: FC<IAdBannerProps> = ({ carouselRef, onClick }) => {
  const isMobileWidth = useIsmobileWidth();
  return (
    <AdSection>
      <GenericCarousel carouselRef={carouselRef} onClick={onClick} id={AdBannerId}>
        <>
          {ADPhotos.map((item) => (
            <Slide
              key={item.id}
              src={isMobileWidth ? item.item[isMobile] : item.item[isDesktop]}
              alt={item.text}
            />
          ))}
        </>
      </GenericCarousel>
    </AdSection>
  );
};
