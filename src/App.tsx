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
  initialLocalStorageItems,
  initialOrdered,
  initialTotalObj,
  localStorageItemsKeys,
  Paths,
  valute,
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
import { OrderPage } from './pages/OrderPage';
import { formReducer } from './Components/Order/formReducer';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogItemPage } from './pages/CatalogItemPage';
import { ErrorPage } from './pages/ErrorPage';
import { getProductsBasketItems } from './Redux/products/productsSelectors';
import { fetchBasketProducts } from './Redux/products/productsOperations';
import type { AppDispatch } from './Redux/store';
import { setBasket } from './Redux/products/productsSlice';

function App() {
  const navigate = useNavigate();
  const [total, setTotal] = useState<TotalObj>(initialTotalObj);
  const [submit, setSubmit] = useState(false);
  const [form, dispatch] = useReducer(formReducer, initialFormData);
  const appDispath: AppDispatch = useDispatch();
  const { baket, shopItems, favorite, orderForm } = localStorageItemsKeys;
  const [checkFormOrder, setCheckFormOrdr] = useState<CheckFormOrder>(
    initialCheckFormOrder,
  );
  const [ordered, setOrdered] = useState<Ordered>(initialOrdered);
  const basketData = useSelector(getProductsBasketItems);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [localStorageItems, setLocalStorageItems] =
    useState<LocalStorageItemShop>(() => {
      const data = localStorage.getItem(shopItems);
      return data ? JSON.parse(data) : initialLocalStorageItems;
    });
  useEffect(() => {
    if (basketData.length === 0) {
      const basketIdsItems = Object.values(localStorageItems[baket]).flatMap(
        (category) => Object.keys(category),
      );
      appDispath(fetchBasketProducts(basketIdsItems));
    }
  }, []);
  useEffect(() => {
    const initialChecked: Record<string, boolean> = {};
    basketData.forEach((item) => {
      initialChecked[item.productVariantId] = false;
    });
    setCheckedItems(initialChecked);
    if (basketData.length === 0) {
      setCheckedItems({});
    }
  }, [basketData]);
  useEffect(() => {
    const totalPrice = basketData.reduce((acc, item) => {
      const count = item.count ?? 1;
      return acc + item.price * count;
    }, 0);
    const totalPriceWithDiscount = basketData.reduce((acc, item) => {
      const count = item.count ?? 1;
      return (
        acc +
        Number(discountCalculate(item.price, item.discountPercentage)) * count
      );
    }, 0);
    const totalObj = {
      total: totalPrice,
      totalWithDiscount: totalPriceWithDiscount,
      valute,
    };
    setTotal(totalObj);
  }, [basketData]);
  const onClickDeleteAll = (data: CheckedItem[]) => {
    const basketIdsItems = Object.values(localStorageItems[baket]).flatMap(
      (category) => Object.keys(category),
    );

    const idsToDelete = new Set(basketIdsItems);

    const newBasket = basketData.filter(
      (item) => !idsToDelete.has(item.productVariantId),
    );

    appDispath(setBasket(newBasket));

    setLocalStorageItems((prev) => {
      const needData = structuredClone(prev[baket]);

      for (const item of data) {
        for (const [key, id] of Object.entries(item)) {
          if (!id) continue;

          delete needData[Number(key) as keyof LocalStorageItemShopCategory]?.[
            id
          ];
        }
      }

      const newData = {
        ...prev,
        [baket]: needData,
      };

      localStorage.setItem(shopItems, JSON.stringify(newData));
      return newData;
    });
  };
  const onClickDeleteOne = (obj: DeletedItemFromBaket) => {
    const { type, id } = obj;
    appDispath(
      setBasket(basketData.filter((it) => it.productVariantId !== id)),
    );
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

  const onClickAdd = (obj: LocalSorageObject, item: ProductItem) => {
    const { type, itemType } = obj;
    if (type === baket) {
      const exists = basketData.some(
        (d) => d.productVariantId === item.productVariantId,
      );
      const updatedBasket = exists
        ? basketData.filter(
            (it) => it.productVariantId !== item.productVariantId,
          )
        : [...basketData, item];
      appDispath(setBasket(updatedBasket));
    }
    setLocalStorageItems((prev) => {
      const elemData = { ...prev[type] };
      const itemData = { ...elemData[itemType] };

      if (itemData[item.productVariantId])
        delete itemData[item.productVariantId];
      else itemData[item.productVariantId] = 1;
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
    const parentId = e.currentTarget.parentElement?.id as
      | keyof CarouselsRefs
      | undefined;
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
    const arrayToDelete = basketData.map((item) => {
      const obj: CheckedItem = { 1: undefined, 2: undefined };
      obj[item.categoryId as keyof CheckedItem] = item.productVariantId;
      return obj;
    });
    onClickDeleteAll(arrayToDelete);
    setTotal(initialTotalObj);
    dispatch({ type: 'RESET' });
  };
  const onSubmitOrderForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
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
      timeDelivery:
        form.deliveryType.name === Courier.key
          ? form.deliveryData.deliveryTime
          : null,
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
              onClickAdd={onClickAdd}
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
                onClickAdd={onClickAdd}
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
                basketLength={basketData.length}
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
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                  baket={localStorageItems[baket]}
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
          <Route
            path={Paths.catalog + '/:id'}
            element={
              <CatalogItemPage
                favorite={localStorageItems[favorite]}
                onClickAdd={onClickAdd}
                baket={localStorageItems[baket]}
              />
            }
          >
            <Route
              path={Paths.catalog + '/:id' + '/:id'}
              element={
                <div>
                  <h3>alo</h3>
                </div>
              }
            />
          </Route>
          <Route path={Paths.catalog} element={<CatalogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
