import { useEffect, useState } from 'react';
import type { LocalStorageItemShop, Ordered } from './types';

export const AdBannerId = 'AdBanner';
export const CatalogId = 'Catalog';
export const SharesId = 'Shares';
export const WatchedId = 'Watched';
export const CanLikeId = 'CanLike';
export const isMobile = 320;
export const isDesktop = 1280;
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
export const AvailableTimesPickup = [
  '13.00 - 16.00',
  '9.00 - 12.00',
  '17.00 - 20.00',
];
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
  baket: 'basket' as keyof LocalStorageItemShop,
  cardForm: 'cardForm',
  orderForm: 'orderForm',
  cards: 'cards',
  card: 'card',
};
export const initialTotalObj = {
  total: 0,
  totalWithDiscount: 0,
  valute: '',
};

export const ItemsPaths = {
  catalog: 'Каталог',
  basket: 'Корзина',
  profile: 'Профіль',
  order: 'Оформлення товару',
  SHOP: 'Головна',
  1: 'Смартфони',
  3: 'Ноутбуки',
  2: 'Телевізори',
  4: 'Планшети',
  5: 'Колонки',
  6: 'Навушники',
  7: 'Мікрофони',
  8: 'Пилососи',
  9: 'Зарядки',
};
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
  accepted: false,
};

export const orderedMesages = {
  pickup: 'При отриманні потрібно мати паспорт',
  courier: 'Курєр зателефонує вам за годину до доставки',
};
export function formatDateString(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}.${month}`;
}
export const ukraineCities = [
  'Авдіївка',
  'Алупка',
  'Алушта',
  'Ананьїв',
  'Апостолове',
  'Арбузинка',
  'Армянськ',
  'Балаклія',
  'Балта',
  'Бар',
  'Барвінкове',
  'Баранівка',
  'Бахмач',
  'Бахчисарай',
  'Біла Церква',
  'Білгород-Дністровський',
  'Білопілля',
  'Бобринець',
  'Бобрівниця',
  'Богодухів',
  'Богуслав',
  'Бориспіль',
  'Борислав',
  'Борзна',
  'Боярка',
  'Бровари',
  'Бурштин',
  'Василівка',
  'Ватутіне',
  'Велика Березовиця',
  'Винники',
  'Вінниця',
  'Вишгород',
  'Володимир',
  'Гадяч',
  'Горлівка',
  'Гуляйполе',
  'Дніпро',
  'Долина',
  'Дружківка',
  'Дрогобич',
  'Житомир',
  'Запоріжжя',
  'Звенигородка',
  'Золотоноша',
  'Івано-Франківськ',
  'Ізмаїл',
  'Ізюм',
  "Кам'янське",
  "Кам'янець-Подільський",
  'Керч',
  'Київ',
  'Ковель',
  'Конотоп',
  'Краматорськ',
  'Кременчук',
  'Кривий Ріг',
  'Кропивницький',
  'Курськ',
  'Ладижин',
  'Лисичанськ',
  'Луганськ',
  'Луцьк',
  'Львів',
  'Макіївка',
  'Маріуполь',
  'Мелітополь',
  'Миколаїв',
  'Мукачево',
  'Нікополь',
  'Одеса',
  'Олександрія',
  'Павлоград',
  'Переяслав',
  'Полтава',
  'Прилуки',
  'Рівне',
  'Севастополь',
  'Сєвєродонецьк',
  "Слов'янськ",
  'Суми',
  'Тернопіль',
  'Ужгород',
  'Умань',
  'Фастів',
  'Харків',
  'Херсон',
  'Хмельницький',
  'Черкаси',
  'Чернівці',
  'Чернігів',
  'Южне',
  'Ялта',
];
export const pickupModalText = {
  wh: 'Введіть назву Почтомата чи виберіть зі списку',
  city: 'Введіть назву Міста чи виберіть зі списку',
};
export const initialDeliveryModalText = {
  vh: [],
  city: [],
};

export const scrollToCard = (
  container: HTMLElement | null,
  card: HTMLDivElement | null,
) => {
  if (container && card) {
    const left = card.offsetLeft - container.offsetLeft;

    container.scrollTo({
      left,
      behavior: 'smooth',
    });
  }
};
export const initialModalToDelete = {
  modal: false,
  cardNumber: '',
};
export const valute = '$';
export const initialLocalStorageItems = {
  favorites: {},
  basket: {},
};
export const options = {
  cores: 'Кількість Ядер',
  screenSize: 'Екран',
  screenResolution: 'Роздільна здатність',
  powerW: 'Потужніть блока живлення',
};
export function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounced;
}
