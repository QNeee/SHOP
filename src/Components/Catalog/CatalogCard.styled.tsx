import styled from 'styled-components';

export const CatalogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 98px;
  height: 163px;
  p {
    @media screen and (min-width: 1280px) {
      font-size: x-large;
    }
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    flex: 0 0 200px;
    height: 246px;
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
