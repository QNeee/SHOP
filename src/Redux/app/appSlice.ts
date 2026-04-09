import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  loading: boolean;
  error: unknown;
  token: string | null;
}
const initialState: IAppState = {
  error: null,
  loading: false,
  token: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    exitApp: () => initialState,
  },
  extraReducers: (builder) => {},
});
export const { exitApp, setToken } = appSlice.actions;
