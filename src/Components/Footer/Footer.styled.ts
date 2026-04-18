import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
  }
`;
