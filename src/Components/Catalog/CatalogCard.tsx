import type { FC } from 'react';
import type { PhotoItem } from '../../types';
import { CatalogCardWrapper, ImageContainer } from './CatalogCard.styled';
import { isDesktop, isMobile, useIsmobileWidth } from '../../Helper';
interface ICatalogCardProps {
  item: PhotoItem;
}
export const CatalogCard: FC<ICatalogCardProps> = ({ item }) => {
  const isMobileWidth = useIsmobileWidth();
  const itemPhotos = isMobileWidth ? item.item[isMobile] : item.item[isDesktop];
  return (
    <CatalogCardWrapper>
      <ImageContainer>
        <img src={itemPhotos as string} alt={item.text} />
      </ImageContainer>
      <p>{item.text}</p>
    </CatalogCardWrapper>
  );
};
