import styled from 'styled-components';

export const CatalogItemContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 24px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const CatalogItemBorder = styled.div`
  border-top: 1px solid #ccc;
`;
export const CatalogItemContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
export const ButtonsContainer = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-right: 20px;
  }
`;
export const FavoriteContainer = styled.div``;
export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CatalogItemInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
`;
export const CatalogItemInfoPContainer = styled.div`
  margin-top: 12px;
  p {
    margin: 0;
    font-size: 11px;
    color: #888;
  }
`;
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
