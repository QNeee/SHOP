import type { FC } from 'react';
import { Basket } from '../Components/Basket/Basket';
import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { basket, main } from '../Helper';
import type { LocalStorageItemCategory } from '../types';
interface IBasketPageProps {
  items: LocalStorageItemCategory;
}
export const BasketPage: FC<IBasketPageProps> = ({ items }) => {
  const basketPath = `${main} / ${basket}`;
  return (
    <GenericRoute path={basketPath} title={basket}>
      <Basket items={items}></Basket>
    </GenericRoute>
  );
};
