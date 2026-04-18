import { createSlice } from '@reduxjs/toolkit';
import type { ProductItem } from '../../types';
import {
  fetchBasketProducts,
  fetchProducts,
  fetchProductsShares,
} from './productsOperations';
export interface ISProductsState {
  sharesLoading: boolean;
  error: unknown;
  products: ProductItem[];
  shares: ProductItem[];
  watched: ProductItem[];
  basket: ProductItem[];
  productsLoading: boolean;
  basketLoading: boolean;
}
const initialState: ISProductsState = {
  products: [],
  sharesLoading: false,
  basketLoading: false,
  productsLoading: false,
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
        state.productsLoading = true;
        state.error = null;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload.data;
        state.productsLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsShares.pending, (state) => {
        state.sharesLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsShares.fulfilled, (state, { payload }) => {
        state.shares = payload.data;
        state.sharesLoading = false;
      })
      .addCase(fetchProductsShares.rejected, (state, action) => {
        state.sharesLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchBasketProducts.pending, (state) => {
        state.basketLoading = true;
        state.error = null;
      })
      .addCase(fetchBasketProducts.fulfilled, (state, { payload }) => {
        state.basket = payload.data;
        state.basketLoading = false;
      })
      .addCase(fetchBasketProducts.rejected, (state, action) => {
        state.basketLoading = false;
        state.error = action.payload;
      });
  },
});
export const { exitApp, setBasket } = productsSlice.actions;
