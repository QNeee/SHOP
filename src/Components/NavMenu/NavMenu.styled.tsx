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
`;
export const UrlText = styled.h3`
  font-size: 14px;
  color: #454545;
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
