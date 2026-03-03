import type { FC } from 'react';
import type { PhotoItem } from '../../types';
import { CatalogCardWrapper, ImageContainer } from './CatalogCard.styled';
import { useIsmobileWidth } from '../../Helper';
interface ICatalogCardProps {
  item: PhotoItem;
}
export const CatalogCard: FC<ICatalogCardProps> = ({ item }) => {
  return (
    <CatalogCardWrapper>
      <ImageContainer>
        <img
          width={!useIsmobileWidth() ? 86 : 45}
          height={!useIsmobileWidth() ? 167 : 88}
          src={item.item}
          alt={item.text}
        />
      </ImageContainer>
      <p>{item.text}</p>
    </CatalogCardWrapper>
  );
};
