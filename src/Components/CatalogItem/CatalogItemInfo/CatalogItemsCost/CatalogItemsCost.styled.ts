import styled from 'styled-components';

export const CatalogItemCostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  white-space: nowrap;
`;
export const CatalogItemCostAvailable = styled.p<{ $inStock: boolean }>`
  font-size: 12px;
  margin: 0;
  line-height: 1;
  color: ${({ $inStock }) => ($inStock ? 'green' : 'blue')};
`;
