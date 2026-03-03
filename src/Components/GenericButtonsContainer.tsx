import { useEffect, useState, type FC } from 'react';
import { ButtonIcon } from '../assets/ButtonIcon';
import { GenericContainer } from './GenerucButtonsContainer.styled';

interface IGenericButtonsContainerProps {
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  id: string;
  carouselRef: React.RefObject<HTMLDivElement | null>;
}

export const GenericButtonsContainer: FC<IGenericButtonsContainerProps> = ({
  onClick,
  id,
  carouselRef,
}) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    setCanScrollPrev(carousel.scrollLeft > 0);
    setCanScrollNext(carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth);
  };

  useEffect(() => {
    checkScroll();
    carouselRef.current?.addEventListener('scroll', checkScroll);

    return () => {
      carouselRef.current?.removeEventListener('scroll', checkScroll);
    };
  }, [carouselRef]);

  return (
    <GenericContainer id={id}>
      <ButtonIcon hidden={!canScrollPrev} onClick={onClick} />
      <ButtonIcon hidden={!canScrollNext} direction="next" onClick={onClick} />
    </GenericContainer>
  );
};
