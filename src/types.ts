export type PhotoItem = {
  id: string;
  item: SharesPhotoItem;
  text: string;
};
type SharesPhotoItem = {
  320: string | string[];
  1280: string | string[];
};
export type ProductItem = {
  type: string;
  id: string;
  photos: SharesPhotoItem;
  discount: number;
  text: string;
  price: number;
  valute: string;
  available: boolean;
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
  itemType: keyof LocalStorageItemCategory;
};
export type LocalStorageItem = {
  favorites: LocalStorageItemCategory;
  baket: LocalStorageItemCategory;
};
export type LocalStorageItemCategory = {
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
