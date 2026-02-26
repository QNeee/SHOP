import type { FC } from 'react';
import type { PhotoItem } from '../../types';
import { CatalogCardWrapper, ImageContainer } from './CatalogCard.styled';
interface ICatalogCardProps {
  item: PhotoItem;
}
export const CatalogCard: FC<ICatalogCardProps> = ({ item }) => {
  return (
    <CatalogCardWrapper>
      <ImageContainer>
        <img width={38} height={78} src={item.item} alt={item.text} />
      </ImageContainer>
      <p>{item.text}</p>
    </CatalogCardWrapper>
  );
};
