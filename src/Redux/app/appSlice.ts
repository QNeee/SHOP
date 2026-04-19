import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  loading: boolean;
  error: unknown;
  token: string | null;
  searchValue: string;
}
const initialState: IAppState = {
  error: null,
  loading: false,
  token: null,
  searchValue: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    exitApp: () => initialState,
  },
  // extraReducers: (builder) => {},
});
export const { exitApp, setToken, setSearchValue } = appSlice.actions;
