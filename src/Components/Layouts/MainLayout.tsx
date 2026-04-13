import type { FC } from 'react';
import { Paths, useIsmobileWidth } from '../../Helper';
import type {
  LocalSorageObject,
  LocalStorageItemShopCategory,
} from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { useLocation } from 'react-router-dom';
import { Watched } from '../Watched/Watched';
interface IMainLayoutProps {
  carouselsRefs: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClickFavorite: (obj: LocalSorageObject) => void;
  ordered: boolean;
}
export const MainLayout: FC<IMainLayoutProps> = ({
  carouselsRefs,
  onClickCarouselButton,
  onClickFavorite,
  baket,
  favorite,
  ordered,
}) => {
  const { pathname } = useLocation();
  const base = Paths.base + '/';
  return (
    <>
      {pathname === base || pathname.includes(Paths.catalog) ? (
        <Header items={baket} />
      ) : null}
      <Main />
      {pathname !== base && !ordered && !pathname.includes(Paths.catalog) ? (
        <Watched
          baket={baket}
          favorite={favorite}
          watchedRef={carouselsRefs}
          onClickCarouselButton={onClickCarouselButton}
          onClick={onClickFavorite}
        />
      ) : null}
      {useIsmobileWidth() ? <Footer items={baket} /> : null}
    </>
  );
};
