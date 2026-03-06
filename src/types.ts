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
export type FavoriteObject = {
  id: string;
  elemId: string;
};
export type FavoriteLocalStorage = {
  Shares: Record<string, boolean>;
  Watched: Record<string, boolean>;
};
