import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Layout } from './Components/Layout/Layout';
import { MainPage } from './pages/MainPage';
import { BasketPage } from './pages/BasketPage';
import { localStorageName, Paths } from './Helper';
import { ProfilePage } from './pages/ProfilePage';
import { CatalogPage } from './pages/CatalogPage';
import { OrderPage } from './pages/OrderPage';
import { useState } from 'react';
import type { LocalSorageObject, LocalStorageItems } from './types';

function App() {
  const localStorageFavorite = 'favorites';
  const localStorageBaket = 'baket';
  const onClickAddToFavorite = (obj: LocalSorageObject) => {
    const { type, elemId, itemType, id } = obj;

    setLocalStorageItems((prev) => {
      const elemData = { ...prev[type][elemId] };
      const itemData = { ...elemData[itemType] };

      if (itemData[id]) delete itemData[id];
      else itemData[id] = true;

      const newData = {
        ...prev,
        [type]: {
          ...prev[type],
          [elemId]: {
            ...elemData,
            [itemType]: itemData,
          },
        },
      };

      localStorage.setItem(localStorageName, JSON.stringify(newData));

      return newData;
    });
  };
  const [localStorageItems, setLocalStorageItems] = useState<LocalStorageItems>(() => {
    const data = localStorage.getItem(localStorageName);
    return data
      ? JSON.parse(data)
      : {
          favorites: {
            Shares: { smart: {} },
            Watched: { smart: {} },
          },
          baket: {
            Shares: { smart: {} },
            Watched: { smart: {} },
          },
        };
  });
  return (
    <>
      <Routes>
        <Route path={Paths.base} element={<Layout />}>
          <Route
            index
            element={
              <MainPage
                onClick={onClickAddToFavorite}
                favorite={localStorageItems[localStorageFavorite]}
                baket={localStorageItems[localStorageBaket]}
              />
            }
          />
          <Route path={Paths.basket} element={<BasketPage />} />
          <Route path={Paths.profile} element={<ProfilePage />} />
          <Route path={Paths.catalog} element={<CatalogPage />} />
          <Route path={Paths.order} element={<OrderPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
