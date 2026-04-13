import type { RootState } from '../store';

export const getCatalogItemPath = (state: RootState) =>
  state.app.catalogItemPath;
