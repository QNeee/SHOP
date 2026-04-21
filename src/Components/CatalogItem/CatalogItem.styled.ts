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

export const CatalogItemInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
`;
