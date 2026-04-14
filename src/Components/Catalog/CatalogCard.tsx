import type { FC } from 'react';
import type { PhotoItem } from '../../types';
import { CatalogCardWrapper, ImageContainer } from './CatalogCard.styled';
import { isDesktop, isMobile, Paths, useIsmobileWidth } from '../../Helper';
import { useNavigate } from 'react-router-dom';
interface ICatalogCardProps {
  item: PhotoItem;
}
export const CatalogCard: FC<ICatalogCardProps> = ({ item }) => {
  const isMobileWidth = useIsmobileWidth();
  const itemPhotos = isMobileWidth ? item.item[isMobile] : item.item[isDesktop];
  const navigate = useNavigate();
  return (
    <CatalogCardWrapper onClick={() => navigate(`${Paths.catalog}/${item.id}`)}>
      <ImageContainer>
        <img src={itemPhotos as string} loading="lazy" alt={item.text} />
      </ImageContainer>
      <p>{item.text}</p>
    </CatalogCardWrapper>
  );
};
