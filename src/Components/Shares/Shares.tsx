import type { FC } from 'react';
import { sharesPhoto } from '../../assets/Shares/Shares';
import { SharesTextContainer, SharesSection, SharesText } from './Shares.styled';
import { SharesCard } from './SharesCard';
import { GenericCarousel } from '../GenericCarousel';
import { SharesId } from '../../Helper';
interface ISharesProps {
  onClickFavorite: (id: string) => void;
  favorite: string[];
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
}

export const Shares: FC<ISharesProps> = ({ onClickFavorite, favorite, onClick, carouselRef }) => {
  return (
    <>
      <SharesSection>
        <SharesTextContainer>
          <SharesText>Акції</SharesText>
        </SharesTextContainer>
        <GenericCarousel id={SharesId} carouselRef={carouselRef} onClick={onClick}>
          <>
            {sharesPhoto.map((item) => (
              <SharesCard
                key={item.id}
                item={item}
                onClickFavorite={onClickFavorite}
                favorite={favorite}
              />
            ))}
          </>
        </GenericCarousel>
      </SharesSection>
    </>
  );
};
