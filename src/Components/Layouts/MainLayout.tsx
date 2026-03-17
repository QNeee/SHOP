import type { FC } from 'react';
import { CanLikeId, Paths, useIsmobileWidth } from '../../Helper';
import type { LocalSorageObject, LocalStorageItemShopCategory } from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { useLocation } from 'react-router-dom';
import { Products } from '../Products/Products';
import { sharesPhoto } from '../../assets/Shares/Shares';
interface IMainLayoutProps {
  carouselsRefs: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  favorite: LocalStorageItemShopCategory;
  baket: LocalStorageItemShopCategory;
  onClickFavorite: (obj: LocalSorageObject) => void;
}
export const MainLayout: FC<IMainLayoutProps> = ({
  carouselsRefs,
  onClickCarouselButton,
  onClickFavorite,
  baket,
  favorite,
}) => {
  const { pathname } = useLocation();
  const base = Paths.base + '/';
  return (
    <>
      {pathname === base ? <Header items={baket} /> : null}
      <Main />
      {pathname !== base ? (
        <Products
          baket={baket}
          favorite={favorite}
          carouselRef={carouselsRefs}
          onClickCarousel={onClickCarouselButton}
          items={sharesPhoto}
          headerTitle="Ви дивилися"
          id={CanLikeId}
          onClick={onClickFavorite}
        />
      ) : null}
      {useIsmobileWidth() ? <Footer items={baket} /> : null}
    </>
  );
};
