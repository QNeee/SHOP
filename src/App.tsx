import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import { MainLayout } from './Components/Layouts/MainLayout';
import { MainPage } from './pages/MainPage';
import {
  CanLikeId,
  discountCalculate,
  initialFormData,
  initialTotalObj,
  localStorageBaket,
  localStorageFavorite,
  localStorageName,
  Paths,
} from './Helper';
import { ProfilePage } from './pages/ProfilePage';
import { CatalogPage } from './pages/CatalogPage';
import { useEffect, useState } from 'react';
import type {
  CarouselsRefs,
  CheckedItem,
  DataForm,
  DeletedItemFromBaket,
  LocalSorageObject,
  LocalStorageItem,
  LocalStorageItemCategory,
  ProductItem,
  TotalObj,
} from './types';
import React from 'react';
import { BasketLayout } from './Components/Layouts/BasketLayout';
import { BasketPage } from './pages/BasketPage';
import { sharesPhoto } from './assets/Shares/Shares';
import { OrderPage } from './pages/OrderPage';

function App() {
  const [form, setForm] = useState<DataForm>(initialFormData);
  const navigate = useNavigate();
  const [renderItemsBaket, setRenderItemsBaket] = useState<ProductItem[]>([]);
  const [total, setTotal] = useState<TotalObj>(initialTotalObj);
  const valute = '₴';
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
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
  useEffect(() => {
    const data = Object.keys(localStorageItems[localStorageBaket]).flatMap((k) => {
      const itemKey = localStorageItems[localStorageBaket][k as keyof LocalStorageItemCategory];

      return sharesPhoto
        .filter((item) => item.id in itemKey)
        .map((item) => ({
          ...item,
          count: itemKey[item.id],
        }));
    });
    setRenderItemsBaket(data);
    const initialChecked: Record<string, boolean> = {};
    data.forEach((item) => {
      initialChecked[item.id] = false;
    });
    setCheckedItems(initialChecked);
    if (data.length === 0) {
      setCheckedItems({});
    }
  }, [localStorageItems[localStorageBaket]]);
  useEffect(() => {
    const totalPrice = renderItemsBaket.reduce((acc, item) => {
      const count = item.count ?? 1;
      return acc + item.price * count;
    }, 0);
    const totalPriceWithDiscount = renderItemsBaket.reduce((acc, item) => {
      const count = item.count ?? 1;
      return acc + Number(discountCalculate(item.price, item.discount)) * count;
    }, 0);
    const totalObj = {
      total: totalPrice,
      totalWithDiscount: totalPriceWithDiscount,
      valute,
    };
    setTotal(totalObj);
  }, [renderItemsBaket]);
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
  const onClickToOrder = () => {
    const totalObj = {
      total: total.total,
      totalWithDiscount: total.totalWithDiscount,
      valute: total.valute,
    };
    navigate(Paths.order);
    setTotal(totalObj);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const onSubmitOrderForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <Routes>
        <Route
          path={Paths.base}
          element={
            <MainLayout
              favorite={localStorageItems[localStorageFavorite]}
              baket={localStorageItems[localStorageBaket]}
              onClickFavorite={onClickAdd}
              carouselsRefs={carouselsRefs[CanLikeId]}
              onClickCarouselButton={onClickCarouselButton}
              items={localStorageItems[localStorageBaket]}
            />
          }
        >
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
              <BasketLayout
                onClickToOrder={onClickToOrder}
                onSubmitOrderForm={onSubmitOrderForm}
                total={total}
              />
            }
          >
            <Route
              path={Paths.basket}
              element={
                <BasketPage
                  setLocalStorageItems={setLocalStorageItems}
                  onClickDeleteOne={onClickDeleteOne}
                  onClickDeleteAll={onClickDeleteAll}
                  items={renderItemsBaket}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              }
            />
            <Route path={Paths.order} element={<OrderPage setForm={setForm} form={form} />} />
          </Route>
          <Route path={Paths.profile} element={<ProfilePage />} />
          <Route path={Paths.catalog} element={<CatalogPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
