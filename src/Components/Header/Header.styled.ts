import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 189px;
  border-bottom: 1px solid #ccc;
  border-radius: 0 0 10px 10px;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0;
  }
`;
export const Logo = styled.img`
  display: block;
  width: 118px;
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 58px;
  @media screen and (min-width: 1280px) {
    margin: 0;
    margin-right: auto;
    padding-top: 0;
  }
`;
export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 16px;
`;
export const SearcInput = styled.input`
  background-color: #dedede;
  border: none;
  height: 100%;
  margin-left: 16px;
  outline: none;
  padding: 0 8px;
  border-radius: 10px;
  flex: 1;
  &::placeholder {
    color: #454545;
    font-size: 14px;
    opacity: 1;
  }
`;
export const SearchContainer = styled.label`
  width: 90%;
  height: 47px;
  margin-left: auto;
  margin-right: auto;
  background-color: #dedede;
  display: flex;
  align-items: center;
  margin-top: 24px;
  border-radius: 10px;
  @media screen and (min-width: 1280px) {
    width: 754px;
    margin: 0;
    margin-right: auto;
  }
`;
