import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

export const Input = styled.input`
  height: 44px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  padding: 0 12px;
  font-size: 14px;

  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 1px solid #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

export const SaveButton = styled.button`
  margin-top: 20px;
  height: 48px;
  border-radius: 10px;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  &:active {
    transform: scale(0.97);
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
