import type { RootState } from '../store';

export const getAppToken = (state: RootState) => state.app.token;

export const getSearchValue = (state: RootState) => state.app.searchValue;
