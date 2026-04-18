import { createSlice } from '@reduxjs/toolkit';
import type { ProductItem } from '../../types';
import {
  fetchBasketProducts,
  fetchProducts,
  fetchProductsShares,
} from './productsOperations';
export interface ISProductsState {
  loading: boolean;
  error: unknown;
  products: ProductItem[];
  shares: ProductItem[];
  watched: ProductItem[];
  basket: ProductItem[];
}
const initialState: ISProductsState = {
  products: [],
  loading: false,
  error: null,
  shares: [],
  watched: [],
  basket: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    exitApp: () => initialState,
    setBasket: (state, { payload }) => {
      state.basket = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.products = [];
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
      })
      .addCase(fetchBasketProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBasketProducts.fulfilled, (state, { payload }) => {
        state.basket = payload.data;
        state.loading = false;
      })
      .addCase(fetchBasketProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { exitApp, setBasket } = productsSlice.actions;
