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
import type { LocalSorageObject, LocalStorageItem } from './types';

function App() {
  const localStorageFavorite = 'favorites';
  const localStorageBaket = 'baket';
  const onClickAdd = (obj: LocalSorageObject) => {
    const { type, itemType, id } = obj;

    setLocalStorageItems((prev) => {
      const elemData = { ...prev[type] };
      const itemData = { ...elemData[itemType] };

      if (itemData[id]) delete itemData[id];
      else itemData[id] = true;
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
  return (
    <>
      <Routes>
        <Route path={Paths.base} element={<Layout items={localStorageItems[localStorageBaket]} />}>
          <Route
            index
            element={
              <MainPage
                onClick={onClickAdd}
                favorite={localStorageItems[localStorageFavorite]}
                baket={localStorageItems[localStorageBaket]}
              />
            }
          />
          <Route
            path={Paths.basket}
            element={<BasketPage items={localStorageItems[localStorageBaket]} />}
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
