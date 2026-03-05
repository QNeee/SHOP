import { useState } from 'react';
import { AdBanner } from '../AdBanner/AdBanner';
import { Catalog } from '../Catalog/Catalog';
import { Products } from '../Shares/Products';
import type { CarouselsRefs, FavoriteLocalStorage, FavoriteObject } from '../../types';
import React from 'react';
import { AdBannerId, CatalogId, SharesId, useIsmobileWidth, WatchedId } from '../../Helper';
import { sharesPhoto } from '../../assets/Shares/Shares';

export const Main = () => {
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
          Shares: [],
          Watched: [],
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
      const needData = prev[elemId as keyof FavoriteLocalStorage];

      const duplicateIndex = needData.findIndex((item) => item === id);

      let newArray;

      if (duplicateIndex !== -1) {
        newArray = needData.filter((item) => item !== id);
      } else {
        newArray = [...needData, id];
      }

      const newData = {
        ...prev,
        [elemId]: newArray,
      };

      localStorage.setItem(localStorageShares, JSON.stringify(newData));

      return newData;
    });
  };
  return (
    <div>
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
    </div>
  );
};
