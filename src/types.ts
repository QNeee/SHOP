export type PhotoItem = {
  id: string;
  item: string;
  text: string;
};

export type SharesItem = {
  id: string;
  photos: string[];
  discount: number;
  text: string;
  price: number;
  valute: string;
  available: boolean;
};
