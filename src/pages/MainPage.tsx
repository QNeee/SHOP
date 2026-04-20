import { useEffect, type FC } from 'react';

import React from 'react';
import { AdBannerId, CatalogId, SharesId } from '../Helper';
import type {
  CarouselsRefs,
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../types';
import { AdBanner } from '../Components/AdBanner/AdBanner';
import { Catalog } from '../Components/Catalog/Catalog';
import { Shares } from '../Components/Shares/Shares';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../Redux/store';
import {
  getProductsSharesItems,
  getSharesLodaing,
} from '../Redux/products/productsSelectors';
import { fetchProductsShares } from '../Redux/products/productsOperations';
import { Loader } from '../Components/Generic/Loader/Loader';

interface IMainPageProps {
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  carouselsRefs: CarouselsRefs;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
}
export const MainPage: FC<IMainPageProps> = ({
  onClickAdd,
  favorite,
  baket,
  carouselsRefs,
  onClickCarouselButton,
}) => {
  const sharesItems = useSelector(getProductsSharesItems);
  const dispatch: AppDispatch = useDispatch();
  const sharesLoading = useSelector(getSharesLodaing);
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
      <Shares
        items={sharesItems}
        baket={baket}
        favorite={favorite}
        sharesRef={carouselsRefs[SharesId]}
        onClickAdd={onClickAdd}
        onClickCarouselButton={onClickCarouselButton}
      />
      {/* {sharesItems.length > 0 && !sharesLoading ? (
        <Shares
          items={sharesItems}
          baket={baket}
          favorite={favorite}
          sharesRef={carouselsRefs[SharesId]}
          onClickAdd={onClickAdd}
          onClickCarouselButton={onClickCarouselButton}
        />
      ) : sharesLoading ? (
        <Loader />
      ) : null} */}
    </>
  );
};
