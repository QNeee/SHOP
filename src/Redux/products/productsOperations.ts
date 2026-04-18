import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Host } from '../Host';

const productsUrl = 'products';
const catergoryId = 'categoryId';
export const fetchProducts = createAsyncThunk(
  'products/get',
  async (filter: string | null = null, { rejectWithValue }) => {
    try {
      const url = filter
        ? Host + `${productsUrl}/?${catergoryId}=${filter}`
        : Host + `${productsUrl}/`;
      const result = await axios.get(url);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchProductsShares = createAsyncThunk(
  'products/shares/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get(Host + `${productsUrl}/shares`);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchBasketProducts = createAsyncThunk(
  'products/basket/get',
  async (ids: string[], { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `${Host}${productsUrl}/basket?${ids.map((x) => `ids=${x}`).join('&')}`,
      );
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
