import styled from "styled-components";

export const PickupModalWrapper = styled.div`
height: 100%;
`;
export const PickupModalChoseInput = styled.input`
  width: 100%;  
  padding: 12px 16px;  
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease-in-out;
  background-color: #1e1e1e; 
  color: #fff;           

  &:focus {
    border-color: #4cafef;  
    box-shadow: 0 0 6px rgba(76, 175, 239, 0.5); 
    background-color: #222; 
  }


  &:disabled {
    background-color: #333;
    color: #555;
    cursor: not-allowed;
  }
`;




export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

export const SelectContainerFlex = styled.div`
border: 2px solid black;
border-radius: 12px;
padding: 5px;
width: 80%;
margin : 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
&:hover{
    border-color: grey;
}
`;