import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Layout } from './Components/Layout/Layout';
import { MainPage } from './pages/MainPage';
import { BasketPage } from './pages/BasketPage';
import {
  CanLikeId,
  localStorageBaket,
  localStorageFavorite,
  localStorageName,
  Paths,
} from './Helper';
import { ProfilePage } from './pages/ProfilePage';
import { CatalogPage } from './pages/CatalogPage';
import { OrderPage } from './pages/OrderPage';
import { useState } from 'react';
import type {
  CarouselsRefs,
  CheckedItem,
  DeletedItemFromBaket,
  LocalSorageObject,
  LocalStorageItem,
  LocalStorageItemCategory,
} from './types';
import React from 'react';

function App() {
  const onClickDeleteAll = (data: CheckedItem[]) => {
    setLocalStorageItems((prev) => {
      const needData = { ...prev[localStorageBaket] };

      data.forEach((item) => {
        Object.entries(item).forEach(([key, id]) => {
          if (id) {
            delete needData[key as keyof LocalStorageItemCategory][id];
          }
        });
      });
      const newData = { ...prev, [localStorageBaket]: needData };
      localStorage.setItem(localStorageName, JSON.stringify(newData));
      return newData;
    });
  };
  const onClickDeleteOne = (obj: DeletedItemFromBaket) => {
    const { type, id } = obj;

    setLocalStorageItems((prev) => {
      const needData = { ...prev[localStorageBaket] };
      const typeData = { ...(needData[type] || {}) };
      if (typeData[id]) delete typeData[id];

      const newData = {
        ...prev,
        [localStorageBaket]: {
          ...needData,
          [type]: typeData,
        },
      };

      localStorage.setItem(localStorageName, JSON.stringify(newData));

      return newData;
    });
  };

  const onClickAdd = (obj: LocalSorageObject) => {
    const { type, itemType, id } = obj;

    setLocalStorageItems((prev) => {
      const elemData = { ...prev[type] };
      const itemData = { ...elemData[itemType] };

      if (itemData[id]) delete itemData[id];
      else itemData[id] = 1;
      const newData = {
        ...prev,
        [type]: {
          ...prev[type],
          [itemType]: itemData,
        },
      };

      localStorage.setItem(localStorageName, JSON.stringify(newData));

      return newData;
    });
  };
  const [localStorageItems, setLocalStorageItems] = useState<LocalStorageItem>(() => {
    const data = localStorage.getItem(localStorageName);
    return data
      ? JSON.parse(data)
      : {
          favorites: {
            smart: {},
          },
          baket: {
            smart: {},
          },
        };
  });
  const carouselsRefs: CarouselsRefs = {
    AdBanner: React.createRef<HTMLDivElement>(),
    Catalog: React.createRef<HTMLDivElement>(),
    Shares: React.createRef<HTMLDivElement>(),
    Watched: React.createRef<HTMLDivElement>(),
    CanLike: React.createRef<HTMLDivElement>(),
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
      <Routes>
        <Route path={Paths.base} element={<Layout items={localStorageItems[localStorageBaket]} />}>
          <Route
            index
            element={
              <MainPage
                carouselsRefs={carouselsRefs}
                onClickCarouselButton={onClickCarouselButton}
                onClick={onClickAdd}
                favorite={localStorageItems[localStorageFavorite]}
                baket={localStorageItems[localStorageBaket]}
              />
            }
          />
          <Route
            path={Paths.basket}
            element={
              <BasketPage
                favorite={localStorageItems[localStorageFavorite]}
                baket={localStorageItems[localStorageBaket]}
                onClick={onClickAdd}
                carouselsRefs={carouselsRefs[CanLikeId]}
                onClickCarouselButton={onClickCarouselButton}
                setLocalStorageItems={setLocalStorageItems}
                onClickDeleteOne={onClickDeleteOne}
                onClickDeleteAll={onClickDeleteAll}
                items={localStorageItems[localStorageBaket]}
              />
            }
          />
          <Route path={Paths.profile} element={<ProfilePage />} />
          <Route path={Paths.catalog} element={<CatalogPage />} />
          <Route path={Paths.order} element={<OrderPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
