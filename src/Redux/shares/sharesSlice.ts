import { createSlice } from '@reduxjs/toolkit';
import { fetchShares } from './sharesOperations';
import type { ProductItem } from '../../types';
export interface ISharesState {
  loading: boolean;
  error: unknown;
  items: ProductItem[];
}
const initialState: ISharesState = {
  items: [],
  loading: false,
  error: null,
};

export const sharesSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    exitApp: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShares.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShares.fulfilled, (state, { payload }) => {
        state.items = payload.data;
        state.loading = false;
      })
      .addCase(fetchShares.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
