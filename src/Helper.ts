import { useEffect, useState } from 'react';
import type { LocalStorageItemShop, Ordered } from './types';

export const AdBannerId = 'AdBanner';
export const CatalogId = 'Catalog';
export const SharesId = 'Shares';
export const WatchedId = 'Watched';
export const CanLikeId = 'CanLike';
export const isMobile = 320;
export const isDesktop = 1280;
export const main = 'Головна';
export const basket = 'Корзина';
export const profile = 'Профіль';
export const catalog = 'Каталог';
export const order = 'Оформлення товару';
export const Paths = {
  base: '/SHOP',
  basket: '/SHOP/basket',
  profile: '/SHOP/profile',
  catalog: '/SHOP/catalog',
  order: '/SHOP/basket/order',
};
export const Courier = {
  key: 'courier',
  value: 'Курьер',
};
export const AvailableTimesPickup = ['13.00 - 16.00', '9.00 - 12.00', '17.00 - 20.00'];
export const PickUp = {
  key: 'pickup',
  value: 'Самовивіз',
};
export const useIsmobileWidth = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < isDesktop;
};
export const discountCalculate = (price: number, discount: number) => {
  return (price + (price * discount) / 100).toFixed();
};
export const localStorageItemsKeys = {
  shopItems: 'items',
  favorite: 'favorites' as keyof LocalStorageItemShop,
  baket: 'baket' as keyof LocalStorageItemShop,
  cardForm: 'cardForm',
  orderForm: 'orderForm',
  cards: 'cards',
};
export const initialTotalObj = {
  total: 0,
  totalWithDiscount: 0,
  valute: '',
};

const basketPath = `${main} / ${basket}`;
export const initialGenericRouteOptions = { path: basketPath, title: basket };
export const OrderSelectTitle = {
  courier: 'Виберіть Курьера',
  pickup: 'Виберіть відділення',
};
export const formatDate = (date: Date) => {
  const days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const weekDay = days[date.getDay()];

  return `${day}.${month}, ${weekDay}`;
};
export const initialFormData = {
  contactData: {
    name: '',
    phone: '',
    email: '',
  },
  deliveryAdress: {
    city: '',
    street: '',
    house: '',
    flat: '',
  },
  deliveryData: {
    deliveryDateStart: new Date(),
    deliveryDateEnd: new Date(),
    deliveryTime: '',
    message: '',
  },
  deliveryType: {
    name: '',
    data: '',
  },
  payData: {
    cardNumber: '',
    date: '',
  },
};
export const initialAddCardForm = {
  name: '',
  cardNumber: '',
  cvv: '',
  durationTime: '',
};
export const formatCardDuration = (value: string) => {
  let digits = value.replace(/\D/g, '');
  if (digits.length > 4) digits = digits.slice(0, 4);

  let month = digits.slice(0, 2);
  let year = digits.slice(2, 4);

  if (month.length === 2) {
    let m = parseInt(month, 10);
    if (m < 1) m = 1;
    if (m > 12) m = 12;
    month = m.toString().padStart(2, '0');
  }

  const formatted = year ? `${month} / ${year}` : month;

  return formatted;
};
export const initialCheckFormCard = {
  cardNumber: null,
  durationTime: null,
  cvv: null,
  name: null,
};
export const initialCheckFormOrder = {
  contactData: {
    name: null,
    phone: null,
    email: null,
  },
  deliveryAdress: {
    city: null,
    street: null,
    house: null,
    flat: null,
  },
  deliveryData: {
    deliveryTime: true,
  },
  deliveryDest: null,
  payData: null,
};
export const initialOrdered: Ordered = {
  dateDelivery: '',
  timeDelivery: '',
  flag: 'courier',
};

export function formatDateString(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
