import styled from 'styled-components';

export const CatalogItemContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 24px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const CatalogItemContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 139px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const CatalogItemInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  h3 {
    margin: 0;
  }
`;
