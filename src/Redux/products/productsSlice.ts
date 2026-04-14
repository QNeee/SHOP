import { createSlice } from '@reduxjs/toolkit';
import type { ProductItem } from '../../types';
import { fetchProducts } from './productsOperations';
export interface ISProductsState {
  loading: boolean;
  error: unknown;
  items: ProductItem[];
}
const initialState: ISProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    exitApp: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.items = payload.data;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
