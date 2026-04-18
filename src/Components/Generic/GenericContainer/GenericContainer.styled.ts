import styled from 'styled-components';

export const GenericContainer = styled.div`
  max-width: 294px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
`;
export const Border = styled.div`
  width: 100%;
  border-top: 1px solid grey;
`;
export const GenericTextContainer = styled.div`
  width: 100%;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
