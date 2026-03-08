import { useEffect, useState, type FC } from 'react';
import { ButtonIcon } from '../assets/ButtonIcon';
import { GenericContainer } from './GenerucButtonsContainer.styled';
import { useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const EPS = 1;
    const carousel = carouselRef.current;
    setCanScrollPrev(carousel.scrollLeft > 0);
    setCanScrollNext(carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - EPS);
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
      <ButtonIcon pathname={pathname} hidden={!canScrollPrev} onClick={onClick} />
      <ButtonIcon pathname={pathname} hidden={!canScrollNext} direction="next" onClick={onClick} />
    </GenericContainer>
  );
};
