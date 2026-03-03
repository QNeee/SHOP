import styled from 'styled-components';

export const GenericContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  pointer-events: none;
  & > * {
    pointer-events: auto;
  }
`;
