import styled from 'styled-components';
export const Nav = styled.nav`
  margin-top: 28px;
`;
export const IconsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (min-width: 1280px) {
    width: 230px;
  }
`;
export const UrlText = styled.span`
  font-size: 14px;
  color: #454545;
  margin-top: 8px;
`;
export const SvgIcon = styled.svg`
  width: 26px;
  height: 18px;
  display: block;
`;
export const IconsUrl = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover > * {
    color: blue;
    fill: blue;
    stroke: blue;
  }
`;
