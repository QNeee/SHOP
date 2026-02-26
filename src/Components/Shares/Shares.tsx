import { sharesPhoto } from '../../assets/Shares/Shares';
import { Carousel } from '../GenericCarousel.styled';
import { SharesSection, SharesText } from './Shares.styled';
import { SharesCard } from './SharesCard';

export const Shares = () => {
  return (
    <>
      <SharesText>Акції</SharesText>
      <SharesSection>
        <Carousel style={{ gap: '32px' }}>
          {sharesPhoto.map((item) => (
            <SharesCard key={item.id} item={item} />
          ))}
        </Carousel>
      </SharesSection>
    </>
  );
};
