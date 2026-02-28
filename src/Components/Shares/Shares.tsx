import type { FC } from 'react';
import { sharesPhoto } from '../../assets/Shares/Shares';
import { Carousel } from '../GenericCarousel.styled';
import { SharesSection, SharesText } from './Shares.styled';
import { SharesCard } from './SharesCard';
interface ISharesProps {
  onClickFavorite: (id: string) => void;
  favorite: string[];
}

export const Shares: FC<ISharesProps> = ({ onClickFavorite, favorite }) => {
  return (
    <>
      <SharesText>Акції</SharesText>
      <SharesSection>
        <Carousel style={{ gap: '32px' }}>
          {sharesPhoto.map((item) => (
            <SharesCard
              key={item.id}
              item={item}
              onClickFavorite={onClickFavorite}
              favorite={favorite}
            />
          ))}
        </Carousel>
      </SharesSection>
    </>
  );
};
