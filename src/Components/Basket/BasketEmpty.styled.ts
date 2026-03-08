import styled from 'styled-components';

export const BasketEmptyContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 383px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
