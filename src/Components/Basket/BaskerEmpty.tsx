import type { NavigateFunction } from 'react-router-dom';
import { BasketButton } from './Basket.styled';
import { BasketEmptyContainer } from './BasketEmpty.styled';
import type { FC } from 'react';
import { CanLikeId, Paths } from '../../Helper';
import type { LocalSorageObject, LocalStorageItemCategory } from '../../types';

import { Products } from '../Products/Products';
import { sharesPhoto } from '../../assets/Shares/Shares';
interface IBasketEmptyProps {
  navigate: NavigateFunction;
  onClick: (obj: LocalSorageObject) => void;
  carouselsRefs: React.RefObject<HTMLDivElement | null>;
  onClickCarouselButton: (e: React.MouseEvent<SVGSVGElement>) => void;
  favorite: LocalStorageItemCategory;
  baket: LocalStorageItemCategory;
}
export const BasketEmpty: FC<IBasketEmptyProps> = ({
  navigate,
  favorite,
  baket,
  carouselsRefs,
  onClickCarouselButton,
  onClick,
}) => {
  const imgUrl =
    'https://i.postimg.cc/W3JZYsLp/izobrazenie-2026-03-07-170519968-removebg-preview.png';
  return (
    <>
      <BasketEmptyContainer>
        <h3>Ваша корзина пуста</h3>
        <img src={imgUrl} alt="empty" />
        <p>Додайте товари із каталога</p>
        <BasketButton onClick={() => navigate(Paths.catalog)}>Перейти в каталог</BasketButton>
      </BasketEmptyContainer>
      <Products
        baket={baket}
        favorite={favorite}
        carouselRef={carouselsRefs}
        onClickCarousel={onClickCarouselButton}
        items={sharesPhoto}
        headerTitle="Ви дивилися"
        id={CanLikeId}
        onClick={onClick}
      />
    </>
  );
};
