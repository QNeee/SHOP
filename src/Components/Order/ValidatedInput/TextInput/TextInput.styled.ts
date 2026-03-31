import styled from "styled-components";

export const Input = styled.input<{ $valid: boolean | null }>`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border:${(({ $valid }) => {
        switch ($valid) {
            case null:
                return "1px solid #cfcfcf";
            case true:
                return "1px solid green";
            case false:
                return "1px solid red";
            default:
                return "";
        }
    })};
  outline: none;
  padding: 0 35px 0 12px;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
`;