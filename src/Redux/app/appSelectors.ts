import type { RootState } from '../store';

export const getAppToken = (state: RootState) => state.app.token;
