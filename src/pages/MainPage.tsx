import { type FC } from 'react';

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
import { useSelector } from 'react-redux';
import { getSharesItems } from '../Redux/shares/sharesSelectors';

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
  const sharesItems = useSelector(getSharesItems);
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
        onClick={onClick}
        onClickCarouselButton={onClickCarouselButton}
      />
    </>
  );
};
