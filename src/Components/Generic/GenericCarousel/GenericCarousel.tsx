import { type FC, type ReactElement } from 'react';
import { Carousel } from './GenericCarousel.styled';
import { GenericButtonsContainer } from '../GenericButtonsContainer/GenericButtonsContainer';
import { useIsmobileWidth } from '../../../Helper';
interface IGenericCarouselProps {
  children: ReactElement;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  id: string;
}
export const GenericCarousel: FC<IGenericCarouselProps> = ({
  children,
  carouselRef,
  onClick,
  id,
}) => {
  return (
    <Carousel ref={carouselRef}>
      {!useIsmobileWidth() ? (
        <GenericButtonsContainer id={id} onClick={onClick} carouselRef={carouselRef} />
      ) : null}
      {children}
    </Carousel>
  );
};
