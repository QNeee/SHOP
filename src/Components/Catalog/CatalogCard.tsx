import type { FC } from 'react';
import type { PhotoItem } from '../../types';
import { CatalogCardWrapper, ImageContainer } from './CatalogCard.styled';
import {
  isDesktop,
  isMobile,
  localStorageItemsKeys,
  Paths,
  useIsmobileWidth,
} from '../../Helper';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { setCatalogItemPath } from '../../Redux/app/appSlice';
interface ICatalogCardProps {
  item: PhotoItem;
}
export const CatalogCard: FC<ICatalogCardProps> = ({ item }) => {
  const isMobileWidth = useIsmobileWidth();
  const itemPhotos = isMobileWidth ? item.item[isMobile] : item.item[isDesktop];
  const navigate = useNavigate();
  const dispath: AppDispatch = useDispatch();
  const onClickCatalogCard = () => {
    dispath(setCatalogItemPath(item.text));
    const catalogPath = `${Paths.catalog}/${item.id}`;
    localStorage.setItem(localStorageItemsKeys.catalogPath, item.text);
    navigate(catalogPath);
  };
  return (
    <CatalogCardWrapper onClick={onClickCatalogCard}>
      <ImageContainer>
        <img src={itemPhotos as string} loading="lazy" alt={item.text} />
      </ImageContainer>
      <p>{item.text}</p>
    </CatalogCardWrapper>
  );
};
