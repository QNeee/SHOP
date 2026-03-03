import { useState } from 'react';
import { AdBanner } from '../AdBanner/AdBanner';
import { Catalog } from '../Catalog/Catalog';
import { Shares } from '../Shares/Shares';
import type { CarouselsRefs } from '../../types';
import React from 'react';
import { AdBannerId, CatalogId, SharesId } from '../../Helper';

export const Main = () => {
  const localStorageShares = 'shares';
  const carouselsRefs: CarouselsRefs = {
    AdBanner: React.createRef<HTMLDivElement>(),
    Catalog: React.createRef<HTMLDivElement>(),
    Shares: React.createRef<HTMLDivElement>(),
  };

  const [favoriteShares, setFavoriteShares] = useState<string[]>(() => {
    const data = localStorage.getItem(localStorageShares);
    return data ? JSON.parse(data) : [];
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
  const onClickFavorite = (id: string) => {
    setFavoriteShares((prev) => {
      const newData = [...prev];
      const duplicateIndex = newData.findIndex((item) => item === id);

      if (duplicateIndex !== -1) {
        newData.splice(duplicateIndex, 1);
      } else {
        newData.push(id);
      }

      localStorage.setItem(localStorageShares, JSON.stringify(newData));

      return newData;
    });
  };
  return (
    <div>
      <AdBanner carouselRef={carouselsRefs[AdBannerId]} onClick={onClickCarouselButton} />
      <Catalog carouselRef={carouselsRefs[CatalogId]} onClick={onClickCarouselButton} />
      <Shares
        onClickFavorite={onClickFavorite}
        favorite={favoriteShares}
        carouselRef={carouselsRefs[SharesId]}
        onClick={onClickCarouselButton}
      />
    </div>
  );
};
