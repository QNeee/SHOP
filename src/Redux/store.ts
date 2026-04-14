import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { appSlice } from './app/appSlice';
import { sharesSlice } from './shares/sharesSlice';
import { productsSlice } from './products/productsSlice';

const appPesistConfig = {
  key: 'app',
  storage,
  whitelist: ['token'],
};

const persistedAppReducer = persistReducer(appPesistConfig, appSlice.reducer);
export const store = configureStore({
  reducer: {
    app: persistedAppReducer,
    shares: sharesSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
