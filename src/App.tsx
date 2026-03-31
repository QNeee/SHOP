import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import { MainLayout } from './Components/Layouts/MainLayout';
import { MainPage } from './pages/MainPage';
import {
  CanLikeId,
  Courier,
  discountCalculate,
  formatDateString,
  initialCheckFormOrder,
  initialFormData,
  initialOrdered,
  initialTotalObj,
  localStorageItemsKeys,
  Paths,
} from './Helper';
import { ProfilePage } from './pages/ProfilePage';
import { CatalogPage } from './pages/CatalogPage';
import { useEffect, useReducer, useState } from 'react';
import type {
  CarouselsRefs,
  CheckedItem,
  CheckFormOrder,
  DeletedItemFromBaket,
  LocalSorageObject,
  LocalStorageItemShop,
  LocalStorageItemShopCategory,
  Ordered,
  ProductItem,
  TotalObj,
} from './types';
import React from 'react';
import { BasketLayout } from './Components/Layouts/BasketLayout';
import { BasketPage } from './pages/BasketPage';
import { sharesPhoto } from './assets/Shares/Shares';
import { OrderPage } from './pages/OrderPage';
import { formReducer } from './Components/Order/formReducer';

function App() {
  const navigate = useNavigate();
  const [renderItemsBaket, setRenderItemsBaket] = useState<ProductItem[]>([]);
  const [total, setTotal] = useState<TotalObj>(initialTotalObj);
  const [submit, setSubmit] = useState(false);
  const [form, dispatch] = useReducer(formReducer, initialFormData);
  const { baket, shopItems, favorite, orderForm } = localStorageItemsKeys;
  const [checkFormOrder, setCheckFormOrdr] = useState<CheckFormOrder>(initialCheckFormOrder);
  const valute = '₴';
  const [ordered, setOrdered] = useState<Ordered>(initialOrdered);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [localStorageItems, setLocalStorageItems] = useState<LocalStorageItemShop>(() => {
    const data = localStorage.getItem(shopItems);
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
    const data = Object.keys(localStorageItems[baket]).flatMap((k) => {
      const itemKey = localStorageItems[baket][k as keyof LocalStorageItemShopCategory];

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
  }, [localStorageItems[baket as keyof LocalStorageItemShop]]);
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
      const needData = { ...prev[baket] };

      data.forEach((item) => {
        Object.entries(item).forEach(([key, id]) => {
          if (id) {
            delete needData[key as keyof LocalStorageItemShopCategory][id];
          }
        });
      });
      const newData = { ...prev, [baket]: needData };
      localStorage.setItem(shopItems, JSON.stringify(newData));
      return newData;
    });
  };
  const onClickDeleteOne = (obj: DeletedItemFromBaket) => {
    const { type, id } = obj;

    setLocalStorageItems((prev) => {
      const needData = { ...prev[baket] };
      const typeData = { ...(needData[type] || {}) };
      if (typeData[id]) delete typeData[id];

      const newData = {
        ...prev,
        [baket]: {
          ...needData,
          [type]: typeData,
        },
      };

      localStorage.setItem(shopItems, JSON.stringify(newData));

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

      localStorage.setItem(shopItems, JSON.stringify(newData));

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
  const clearForm = () => {
    localStorage.removeItem(orderForm);
    setSubmit(false);
    setCheckFormOrdr(initialCheckFormOrder);
    const arrayToDelete = renderItemsBaket.map((item) => {
      const obj: CheckedItem = { smart: undefined, tv: undefined };
      obj[item.type as keyof CheckedItem] = item.id;
      return obj;
    });
    onClickDeleteAll(arrayToDelete);
    setTotal(initialTotalObj);
    dispatch({ type: 'RESET' });
  };
  const onSubmitOrderForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmit(true);
    const sectionToCheck =
      form.deliveryType.name === Courier.key
        ? checkFormOrder
        : { contactData: checkFormOrder.contactData };
    const hasInvalid = Object.values(sectionToCheck).some((section) =>
      section && typeof section === 'object'
        ? Object.values(section).some((field) => !field)
        : false,
    );
    if (hasInvalid || !checkFormOrder.payData) return;
    const orderedObj: Ordered = {
      dateDelivery:
        formatDateString(form.deliveryData.deliveryDateStart) +
        '-' +
        formatDateString(form.deliveryData.deliveryDateEnd),
      timeDelivery: form.deliveryType.name === Courier.key ? form.deliveryData.deliveryTime : null,
      flag: form.deliveryType.name as 'courier' | 'pickup',
      accepted: true,
    };
    setOrdered(orderedObj);
    clearForm();
  };
  return (
    <>
      <Routes>
        <Route
          path={Paths.base}
          element={
            <MainLayout
              ordered={ordered.accepted}
              favorite={localStorageItems[favorite]}
              baket={localStorageItems[baket]}
              onClickFavorite={onClickAdd}
              carouselsRefs={carouselsRefs[CanLikeId]}
              onClickCarouselButton={onClickCarouselButton}
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
                favorite={localStorageItems[favorite]}
                baket={localStorageItems[baket]}
              />
            }
          />

          <Route
            path={Paths.basket}
            element={
              <BasketLayout
                ordered={ordered}
                setOrdered={setOrdered}
                basketLength={renderItemsBaket.length}
                onClickToOrder={onClickToOrder}
                onSubmitOrderForm={onSubmitOrderForm}
                total={total}
              />
            }
          >
            <Route
              index
              element={
                <BasketPage
                  setOrdered={setOrdered}
                  setLocalStorageItems={setLocalStorageItems}
                  onClickDeleteOne={onClickDeleteOne}
                  onClickDeleteAll={onClickDeleteAll}
                  items={renderItemsBaket}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              }
            />
            <Route
              path={Paths.order}
              element={
                <OrderPage
                  setCheckFormOrdr={setCheckFormOrdr}
                  form={form}
                  dispatch={dispatch}
                  submit={submit}
                />
              }
            />
          </Route>
          <Route path={Paths.profile} element={<ProfilePage />} />
          <Route path={Paths.catalog} element={<CatalogPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
