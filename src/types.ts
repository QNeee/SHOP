export type PhotoItem = {
  id: string;
  item: SharesPhotoItem;
  text: string;
};
type SharesPhotoItem = {
  320: string | string[];
  1280: string | string[];
};
type Discount = {
  percent: number;
  expireAt: string;
};
export type ProductItem = {
  id: string;
  images: Record<string, string[]>;
  inStock: boolean;
  smartId: string;
  title: string;
  discount: Discount;
  price: number;
  type: string;
  count?: number;
};
export type CarouselsRefs = {
  AdBanner: React.RefObject<HTMLDivElement | null>;
  Catalog: React.RefObject<HTMLDivElement | null>;
  Shares: React.RefObject<HTMLDivElement | null>;
  Watched: React.RefObject<HTMLDivElement | null>;
  CanLike: React.RefObject<HTMLDivElement | null>;
};
export type LocalSorageObject = {
  id: string;
  type: 'favorites' | 'baket';
  itemType: keyof LocalStorageItemShopCategory;
};
export type LocalStorageItemShop = {
  favorites: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
};
export type LocalStorageItemShopCategory = {
  smart: Record<string, number>;
  tv: Record<string, number>;
};
export type CheckedItem = {
  smart: string | undefined;
  tv: string | undefined;
};
export type DeletedItemFromBaket = {
  type: keyof CheckedItem;
  id: string;
};
export type TotalObj = {
  total: number;
  totalWithDiscount: number;
  valute: string;
};
export interface NPWarehouse {
  Description: string;
  Ref: string;
  Number: string;
  CityRef: string;
  WarehouseType: string;
}
export interface NPBranch {
  Description: string;
  Ref: string;
  Number: string;
  CityRef: string;
  WarehouseType: string;
}
export type ContactData = {
  name: string;
  phone: string;
  email: string;
};
export type DeliveryAdress = {
  city: string;
  street: string;
  house: string;
  flat: string;
};
type DeliveryData = {
  deliveryDateStart: Date;
  deliveryDateEnd: Date;
  deliveryTime: string;
  message: string;
};
type Delivery = {
  data: string;
  name: string;
};
export type PayData = {
  cardNumber: string;
  date: string;
};
export type DataForm = {
  contactData: ContactData;
  deliveryAdress: DeliveryAdress;
  deliveryData: DeliveryData;
  deliveryType: Delivery;
  payData: PayData;
};
export type CheckFormOrder = {
  contactData: { [key: string]: boolean | null };
  deliveryAdress: { [key: string]: boolean | null };
  deliveryData: { [key: string]: boolean | null };
  deliveryDest: boolean | null;
  payData: boolean | null;
};
export type Card = {
  cardNumber: string;
  image: string;
};
export type Ordered = {
  dateDelivery: string;
  timeDelivery: string | null;
  flag: 'courier' | 'pickup';
  accepted: boolean;
};

export type ModalSelectPickupItems = {
  wh: string[] | null;
  city: string[];
};
export type Actives = {
  cardNumber: string;
  containerId: string;
};
export type ModalCardDelete = {
  modal: boolean;
  cardNumber: string;
};
