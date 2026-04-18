import { useDispatch, useSelector } from 'react-redux';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import type { AppDispatch } from '../Redux/store';
import { getProdutsItems } from '../Redux/products/productsSelectors';
import { useLocation } from 'react-router-dom';
import { useEffect, type FC } from 'react';
import { fetchProducts } from '../Redux/products/productsOperations';
import { CatalogItem } from '../Components/CatalogItem/CatalogItem';
import type { LocalSorageObject, LocalStorageItemShopCategory } from '../types';
interface ICalaogItemPage {
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClick: (obj: LocalSorageObject) => void;
}
export const CatalogItemPage: FC<ICalaogItemPage> = ({
  onClick,
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
  return (
    <GenericRoute>
      <>
        {items.map((item) => (
          <CatalogItem
            onClick={onClick}
            favorite={favorite}
            baket={baket}
            key={item.productVariantId}
            item={item}
          />
        ))}
      </>
    </GenericRoute>
  );
};
