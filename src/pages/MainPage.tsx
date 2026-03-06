import { useState } from 'react';

import React from 'react';
import { AdBannerId, CatalogId, SharesId, useIsmobileWidth, WatchedId } from '../Helper';
import type { CarouselsRefs, FavoriteLocalStorage, FavoriteObject } from '../types';
import { AdBanner } from '../Components/AdBanner/AdBanner';
import { Catalog } from '../Components/Catalog/Catalog';
import { Products } from '../Components/Shares/Products';
import { sharesPhoto } from '../assets/Shares/Shares';

export const MainPage = () => {
  const localStorageShares = 'favorites';
  const isMobile = useIsmobileWidth();
  const carouselsRefs: CarouselsRefs = {
    AdBanner: React.createRef<HTMLDivElement>(),
    Catalog: React.createRef<HTMLDivElement>(),
    Shares: React.createRef<HTMLDivElement>(),
    Watched: React.createRef<HTMLDivElement>(),
  };

  const [favorite, setFavorite] = useState<FavoriteLocalStorage>(() => {
    const data = localStorage.getItem(localStorageShares);

    return data
      ? JSON.parse(data)
      : {
          Shares: {},
          Watched: {},
        };
  });
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
  const onClickFavorite = (obj: FavoriteObject) => {
    const { id, elemId } = obj;

    setFavorite((prev) => {
      const needData = { ...prev[elemId as keyof FavoriteLocalStorage] };

      if (needData[id]) delete needData[id];
      else needData[id] = true;

      const newData = {
        ...prev,
        [elemId]: needData,
      };

      localStorage.setItem(localStorageShares, JSON.stringify(newData));

      return newData;
    });
  };
  return (
    <>
      <AdBanner carouselRef={carouselsRefs[AdBannerId]} onClick={onClickCarouselButton} />
      <Catalog carouselRef={carouselsRefs[CatalogId]} onClick={onClickCarouselButton} />
      {isMobile ? (
        <Products
          onClickFavorite={onClickFavorite}
          favorite={favorite[WatchedId]}
          carouselRef={carouselsRefs[WatchedId]}
          onClick={onClickCarouselButton}
          items={sharesPhoto}
          headerTitle="Ви дивилися"
          id={WatchedId}
        />
      ) : null}
      <Products
        onClickFavorite={onClickFavorite}
        favorite={favorite[SharesId]}
        carouselRef={carouselsRefs[SharesId]}
        onClick={onClickCarouselButton}
        items={sharesPhoto}
        headerTitle="Акції"
        id={SharesId}
      />
    </>
  );
};
