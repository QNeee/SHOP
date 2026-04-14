import { useDispatch, useSelector } from 'react-redux';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import type { AppDispatch } from '../Redux/store';
import { getProdutsItems } from '../Redux/products/productsSelectors';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts } from '../Redux/products/productsOperations';
import { CatalogItem } from '../Components/CatalogItem/CatalogItem';

export const CatalogItemPage = () => {
  const dispath: AppDispatch = useDispatch();
  const items = useSelector(getProdutsItems);
  const { pathname } = useLocation();
  useEffect(() => {
    const filter = pathname.split('/').at(-1) ?? '';
    dispath(fetchProducts(filter));
  }, []);
  return (
    <GenericRoute>
      <>
        {items.map((item) => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </>
    </GenericRoute>
  );
};
