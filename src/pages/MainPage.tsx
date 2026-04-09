import { type FC } from 'react';

import React from 'react';
import {
  AdBannerId,
  CatalogId,
  SharesId,
  useIsmobileWidth,
  WatchedId,
} from '../Helper';
import type {
  CarouselsRefs,
  LocalSorageObject,
  LocalStorageItemShopCategory,
} from '../types';
import { AdBanner } from '../Components/AdBanner/AdBanner';
import { Catalog } from '../Components/Catalog/Catalog';
import { sharesPhoto } from '../assets/Shares/Shares';
import { Shares } from '../Components/Shares/Shares';
import { Watched } from '../Components/Watched/Watched';

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
        baket={baket}
        favorite={favorite}
        sharesRef={carouselsRefs[SharesId]}
        onClick={onClick}
        onClickCarouselButton={onClickCarouselButton}
      />
    </>
  );
};
