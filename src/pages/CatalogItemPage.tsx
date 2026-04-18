import { useDispatch, useSelector } from 'react-redux';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import type { AppDispatch } from '../Redux/store';
import {
  getCatalogLodaing,
  getProdutsItems,
} from '../Redux/products/productsSelectors';
import { useLocation } from 'react-router-dom';
import { useEffect, type FC } from 'react';
import { fetchProducts } from '../Redux/products/productsOperations';
import { CatalogItem } from '../Components/CatalogItem/CatalogItem';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../types';
import { Loader } from '../Components/Generic/Loader/Loader';
interface ICalaogItemPage {
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
}
export const CatalogItemPage: FC<ICalaogItemPage> = ({
  onClickAdd,
  favorite,
  baket,
}) => {
  const dispath: AppDispatch = useDispatch();
  const items = useSelector(getProdutsItems);
  const { pathname } = useLocation();
  useEffect(() => {
    const filter = pathname.split('/').at(-1) ?? '';
    dispath(fetchProducts(filter));
  }, []);
  const catalogLoading = useSelector(getCatalogLodaing);
  return (
    <GenericRoute>
      {!catalogLoading ? (
        <>
          {items.map((item) => (
            <CatalogItem
              onClickAdd={onClickAdd}
              favorite={favorite}
              baket={baket}
              key={item.productVariantId}
              item={item}
            />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </GenericRoute>
  );
};
