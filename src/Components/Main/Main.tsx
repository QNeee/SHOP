import { useState } from 'react';
import { AdBanner } from '../AdBanner/AdBanner';
import { Catalog } from '../Catalog/Catalog';
import { Shares } from '../Shares/Shares';

export const Main = () => {
  const localStorageShares = 'shares';
  const [favoriteShares, setFavoriteShares] = useState<string[]>(() => {
    const data = localStorage.getItem(localStorageShares);
    return data ? JSON.parse(data) : [];
  });
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
      <AdBanner />
      <Catalog />
      <Shares onClickFavorite={onClickFavorite} favorite={favoriteShares} />
    </div>
  );
};
