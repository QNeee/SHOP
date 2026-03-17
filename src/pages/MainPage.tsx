import { type FC } from 'react';

import React from 'react';
import { AdBannerId, CatalogId, SharesId, useIsmobileWidth, WatchedId } from '../Helper';
import type { CarouselsRefs, LocalSorageObject, LocalStorageItemShopCategory } from '../types';
import { AdBanner } from '../Components/AdBanner/AdBanner';
import { Catalog } from '../Components/Catalog/Catalog';
import { Products } from '../Components/Products/Products';
import { sharesPhoto } from '../assets/Shares/Shares';

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
  const isMobile = useIsmobileWidth();

  return (
    <>
      <AdBanner carouselRef={carouselsRefs[AdBannerId]} onClick={onClickCarouselButton} />
      <Catalog carouselRef={carouselsRefs[CatalogId]} onClick={onClickCarouselButton} />
      {isMobile ? (
        <Products
          baket={baket}
          favorite={favorite}
          carouselRef={carouselsRefs[WatchedId]}
          onClickCarousel={onClickCarouselButton}
          items={sharesPhoto}
          headerTitle="Ви дивилися"
          id={WatchedId}
          onClick={onClick}
        />
      ) : null}
      <Products
        baket={baket}
        favorite={favorite}
        carouselRef={carouselsRefs[SharesId]}
        onClickCarousel={onClickCarouselButton}
        items={sharesPhoto}
        headerTitle="Акції"
        id={SharesId}
        onClick={onClick}
      />
    </>
  );
};
