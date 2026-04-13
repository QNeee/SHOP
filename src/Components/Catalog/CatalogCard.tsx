import type { FC } from 'react';
import type { PhotoItem } from '../../types';
import { CatalogCardWrapper, ImageContainer } from './CatalogCard.styled';
import {
  catalog,
  isDesktop,
  isMobile,
  localStorageItemsKeys,
  main,
  Paths,
  useIsmobileWidth,
} from '../../Helper';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCatalogItemPath } from '../../Redux/app/appSlice';
import { getCatalogItemPath } from '../../Redux/app/appSelectors';
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
