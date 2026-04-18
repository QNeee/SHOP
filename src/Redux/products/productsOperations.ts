import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Host } from '../Host';
const productsUrl = 'products';
export const fetchProducts = createAsyncThunk(
  'products/get',
  async (filter: string | null = null, { rejectWithValue }) => {
    try {
      const url = filter
        ? Host + `${productsUrl}/?filter=${filter}`
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
