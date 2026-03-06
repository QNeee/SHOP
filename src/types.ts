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
};
export type CarouselsRefs = {
  AdBanner: React.RefObject<HTMLDivElement | null>;
  Catalog: React.RefObject<HTMLDivElement | null>;
  Shares: React.RefObject<HTMLDivElement | null>;
  Watched: React.RefObject<HTMLDivElement | null>;
};
export type LocalSorageObject = {
  id: string;
  elemId: 'Watched' | 'Shares';
  type: 'favorites' | 'baket';
  itemType: keyof LocalStorageItemCategory;
};
export type LocalStorageItem = {
  Shares: LocalStorageItemCategory;
  Watched: LocalStorageItemCategory;
};
export type LocalStorageItemCategory = {
  smart: Record<string, boolean>;
};
export type LocalStorageItems = {
  favorites: LocalStorageItem;
  baket: LocalStorageItem;
};
