import type { FC } from 'react';
import { CanLikeId, Paths, useIsmobileWidth } from '../../Helper';
import type { LocalSorageObject, LocalStorageItemCategory } from '../../types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { useLocation } from 'react-router-dom';
import { Products } from '../Products/Products';
import { sharesPhoto } from '../../assets/Shares/Shares';
interface ILayoutProps {
  items: LocalStorageItemCategory;
  carouselsRefs: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  favorite: LocalStorageItemCategory;
  baket: LocalStorageItemCategory;
  onClickFavorite: (obj: LocalSorageObject) => void;
}
export const Layout: FC<ILayoutProps> = ({
  items,
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
      {pathname === base ? <Header items={items} /> : null}
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
      {useIsmobileWidth() ? <Footer items={items} /> : null}
    </>
  );
};
