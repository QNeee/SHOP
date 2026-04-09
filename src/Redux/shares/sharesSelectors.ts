import type { RootState } from '../store';

export const getSharesItems = (state: RootState) => state.shares.items;
export const getSharesLodaing = (state: RootState) => state.shares.loading;
export const getSharesError = (state: RootState) => state.shares.error;
