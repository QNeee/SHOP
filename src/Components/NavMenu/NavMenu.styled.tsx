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
export const BaketCountContainer = styled.div`
  position: relative;
`;
export const CountContainer = styled.div<{ $count: number }>`
  position: absolute;
  opacity: ${({ $count }) => ($count > 0 ? 1 : 0)};
  top: -8px;
  right: -8px;
  background-color: purple;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;
