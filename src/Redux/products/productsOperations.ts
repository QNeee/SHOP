import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Host } from '../Host';

export const fetchProducts = createAsyncThunk(
  'products/get',
  async (filter: string | null = null, { rejectWithValue }) => {
    try {
      const url = filter
        ? Host + `products/?filter=${filter}`
        : Host + 'products/';
      const result = await axios.get(url);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
