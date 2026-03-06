import { type FC } from 'react';

import React from 'react';
import { AdBannerId, CatalogId, SharesId, useIsmobileWidth, WatchedId } from '../Helper';
import type { CarouselsRefs, LocalSorageObject, LocalStorageItem } from '../types';
import { AdBanner } from '../Components/AdBanner/AdBanner';
import { Catalog } from '../Components/Catalog/Catalog';
import { Products } from '../Components/Products/Products';
import { sharesPhoto } from '../assets/Shares/Shares';

interface IMainPageProps {
  favorite: LocalStorageItem;
  baket: LocalStorageItem;
  onClick: (obj: LocalSorageObject) => void;
}
export const MainPage: FC<IMainPageProps> = ({ onClick, favorite, baket }) => {
  const isMobile = useIsmobileWidth();
  const carouselsRefs: CarouselsRefs = {
    AdBanner: React.createRef<HTMLDivElement>(),
    Catalog: React.createRef<HTMLDivElement>(),
    Shares: React.createRef<HTMLDivElement>(),
    Watched: React.createRef<HTMLDivElement>(),
  };

  const onClickCarouselButton = (e: React.MouseEvent<SVGSVGElement>) => {
    const id = e.currentTarget.id;
    const parentId = e.currentTarget.parentElement?.id as keyof CarouselsRefs | undefined;
    if (parentId && carouselsRefs[parentId]?.current) {
      carouselsRefs[parentId].current.scrollBy({
        left:
          id === 'next'
            ? carouselsRefs[parentId].current.offsetWidth
            : -carouselsRefs[parentId].current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <AdBanner carouselRef={carouselsRefs[AdBannerId]} onClick={onClickCarouselButton} />
      <Catalog carouselRef={carouselsRefs[CatalogId]} onClick={onClickCarouselButton} />
      {isMobile ? (
        <Products
          baket={baket[WatchedId]}
          favorite={favorite[WatchedId]}
          carouselRef={carouselsRefs[WatchedId]}
          onClickCarousel={onClickCarouselButton}
          items={sharesPhoto}
          headerTitle="Ви дивилися"
          id={WatchedId}
          onClick={onClick}
        />
      ) : null}
      <Products
        baket={baket[SharesId]}
        favorite={favorite[SharesId]}
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
