import type { FC } from 'react';
import { Paths, useIsmobileWidth } from '../../Helper';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
  ProductItem,
} from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { useLocation } from 'react-router-dom';
import { Watched } from '../Watched/Watched';
import { useSelector } from 'react-redux';
import { getProductsWatchedItems } from '../../Redux/products/productsSelectors';
interface IMainLayoutProps {
  carouselsRefs: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClickAdd: (obj: LocalSorageObject, item: ProductItem) => void;
  ordered: boolean;
}
export const MainLayout: FC<IMainLayoutProps> = ({
  carouselsRefs,
  onClickCarouselButton,
  onClickAdd,
  baket,
  favorite,
  ordered,
}) => {
  const { pathname } = useLocation();
  const pathsBlockHeader = [Paths.basket, Paths.order];
  const items = useSelector(getProductsWatchedItems);
  return (
    <>
      {!pathsBlockHeader.includes(pathname.replace(/\/$/, '')) ? (
        <Header items={baket} />
      ) : null}
      <Main />
      {pathname === Paths.basket &&
      !ordered &&
      !pathname.includes(Paths.catalog) &&
      items.length > 0 ? (
        <Watched
          baket={baket}
          favorite={favorite}
          watchedRef={carouselsRefs}
          onClickCarouselButton={onClickCarouselButton}
          onClickAdd={onClickAdd}
          items={items}
        />
      ) : null}
      {useIsmobileWidth() ? <Footer items={baket} /> : null}
    </>
  );
};
