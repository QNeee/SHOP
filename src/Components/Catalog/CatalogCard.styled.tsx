import styled from 'styled-components';

export const CatalogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 98px;
  height: 163px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  p {
    @media screen and (min-width: 1280px) {
      font-size: x-large;
      margin-top: 12px;
    }
    margin-top: 16px;
    text-align: center;
  }
  @media screen and (min-width: 1280px) {
    flex: 0 0 200px;
    height: 246px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
export const ImageContainer = styled.div`
  background-color: #d2d7fa;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
