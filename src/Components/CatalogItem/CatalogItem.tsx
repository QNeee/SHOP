import type { FC } from 'react';
import type { ProductItem } from '../../types';

interface ICatalogItem {
  item: ProductItem;
}

export const CatalogItem: FC<ICatalogItem> = ({ item }) => {
  return <>{item.id}</>;
};
