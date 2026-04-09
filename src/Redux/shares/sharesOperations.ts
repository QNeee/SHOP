import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Host } from '../Host';

export const fetchShares = createAsyncThunk(
  'shares/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get(Host + 'shares/');
      console.log('asdsad');
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
