import { useEffect, useState } from 'react';

export const AdBannerId = 'AdBanner';
export const CatalogId = 'Catalog';
export const SharesId = 'Shares';
export const WatchedId = 'Watched';
export const isMobile = 320;
export const isDesktop = 1280;
export const main = 'Головна';
export const basket = 'Корзина';
export const profile = 'Профіль';
export const catalog = 'Каталог';
export const order = 'Оформлення товару';
export const Paths = {
  base: '/SHOP',
  basket: '/SHOP/basket',
  profile: '/SHOP/profile',
  catalog: '/SHOP/catalog',
  order: '/SHOP/basket/order',
};
export const useIsmobileWidth = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < isDesktop;
};
export const discountCalculate = (price: number, discount: number) => {
  return (price + (price * discount) / 100).toFixed();
};
export const localStorageName = 'app';
