import { createSlice } from '@reduxjs/toolkit';
import type { ProductItem, SharesItem } from '../../types';
import { fetchProducts, fetchProductsShares } from './productsOperations';
export interface ISProductsState {
  loading: boolean;
  error: unknown;
  products: ProductItem[];
  shares: SharesItem[];
  watched: SharesItem[];
}
const initialState: ISProductsState = {
  products: [],
  loading: false,
  error: null,
  shares: [],
  watched: [],
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
        state.products = payload.data;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsShares.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsShares.fulfilled, (state, { payload }) => {
        state.shares = payload.data;
        state.loading = false;
      })
      .addCase(fetchProductsShares.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
