import { useEffect, type FC } from 'react';

import React from 'react';
import { AdBannerId, CatalogId, SharesId } from '../Helper';
import type {
  CarouselsRefs,
  LocalSorageObject,
  LocalStorageItemShopCategory,
} from '../types';
import { AdBanner } from '../Components/AdBanner/AdBanner';
import { Catalog } from '../Components/Catalog/Catalog';
import { Shares } from '../Components/Shares/Shares';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../Redux/store';
import { getProductsSharesItems } from '../Redux/products/productsSelectors';
import { fetchProductsShares } from '../Redux/products/productsOperations';

interface IMainPageProps {
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClick: (obj: LocalSorageObject) => void;
  carouselsRefs: CarouselsRefs;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
}
export const MainPage: FC<IMainPageProps> = ({
  onClick,
  favorite,
  baket,
  carouselsRefs,
  onClickCarouselButton,
}) => {
  const sharesItems = useSelector(getProductsSharesItems);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (sharesItems.length === 0) dispatch(fetchProductsShares());
  }, [sharesItems]);
  return (
    <>
      <AdBanner
        carouselRef={carouselsRefs[AdBannerId]}
        onClick={onClickCarouselButton}
      />
      <Catalog
        carouselRef={carouselsRefs[CatalogId]}
        onClick={onClickCarouselButton}
      />
      {sharesItems.length > 0 ? (
        <Shares
          items={sharesItems}
          baket={baket}
          favorite={favorite}
          sharesRef={carouselsRefs[SharesId]}
          onClick={onClick}
          onClickCarouselButton={onClickCarouselButton}
        />
      ) : null}
    </>
  );
};
