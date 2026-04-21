import type { FC } from 'react';
import { Cost } from '../../../Products/Cost';
import {
  CatalogItemCostAvailable,
  CatalogItemCostContainer,
} from './CatalogItemsCost.styled';
interface ICatalogItemCost {
  stock: number;
  price: number;
  discountPercentage: number | null;
}
export const CatalogItemsCost: FC<ICatalogItemCost> = ({
  stock,
  price,
  discountPercentage,
}) => {
  const makeInStockTitle = () => {
    if (stock > 0) return 'В наявності';
    return 'Немає в наявності';
  };
  return (
    <CatalogItemCostContainer>
      <CatalogItemCostAvailable $inStock={stock > 0}>
        {makeInStockTitle()}
      </CatalogItemCostAvailable>
      <Cost itemPrice={price} itemDiscountPercentage={discountPercentage} />
    </CatalogItemCostContainer>
  );
};
