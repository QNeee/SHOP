import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  height: 400px;
  background-color: white;
  padding: 35px;
  border-radius: 8px;
  color: black;
  z-index: 3;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top:0;
  background: red;
  border: none;
  cursor: pointer;
  color: black;
  &:hover {
    color: red;
  }
`;