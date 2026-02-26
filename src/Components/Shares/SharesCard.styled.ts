import styled from 'styled-components';

export const ImageContainer = styled.div``;
export const TextContainer = styled.div`
  width: 144px;
  height: 85px;
  outline: 1px solid tomato;
  p {
    margin: 0;
    line-height: 1.2;
    font-size: 14px;
  }
`;
export const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  overflow: hidden;

  p {
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const ButtonsContainer = styled.div``;
export const SharesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 395px;
`;
export const ChangeList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  li {
    width: 10px;
    height: 10px;
    border: 1px solid black;
    background-color: white;
    border-radius: 50%;
  }
`;
