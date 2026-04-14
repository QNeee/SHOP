import type { RootState } from '../store';

export const getProdutsItems = (state: RootState) => state.products.items;
export const getProdutsLodaing = (state: RootState) => state.products.loading;
export const getProdutsError = (state: RootState) => state.products.error;
