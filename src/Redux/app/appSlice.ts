import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  loading: boolean;
  error: unknown;
  token: string | null;
  catalogItemPath: string;
}
const initialState: IAppState = {
  error: null,
  loading: false,
  token: null,
  catalogItemPath: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setCatalogItemPath: (state, { payload }) => {
      state.catalogItemPath = payload;
    },
    exitApp: () => initialState,
  },
  // extraReducers: (builder) => {},
});
export const { exitApp, setToken, setCatalogItemPath } = appSlice.actions;
