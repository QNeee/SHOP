import type { RootState } from '../store';

export const getSharesLodaing = (state: RootState) =>
  state.products.sharesLoading;
export const getBasketLoading = (state: RootState) =>
  state.products.basketLoading;
export const getProdutsLodaing = (state: RootState) =>
  state.products.productsLoading;
export const getProdutsError = (state: RootState) => state.products.error;
export const getProdutsItems = (state: RootState) => state.products.products;
export const getProductsSharesItems = (state: RootState) =>
  state.products.shares;
export const getProductsWatchedItems = (state: RootState) =>
  state.products.watched;
export const getProductsBasketItems = (state: RootState) =>
  state.products.basket;
