import type { RootState } from '../store';

export const getProdutsItems = (state: RootState) => state.products.products;
export const getProdutsLodaing = (state: RootState) => state.products.loading;
export const getProdutsError = (state: RootState) => state.products.error;
export const getProductsSharesItems = (state: RootState) =>
  state.products.shares;
export const getProductsWatchedItems = (state: RootState) =>
  state.products.watched;
export const getProductsBasketItems = (state: RootState) =>
  state.products.basket;
