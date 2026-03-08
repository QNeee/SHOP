import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 12px;

  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 24px 0 12px;
  color: #222;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;

  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 0 12px;

  font-size: 14px;
  background: white;

  box-sizing: border-box;

  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border: 1px solid #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.15);
  }

  &::placeholder {
    color: #999;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;

  > * {
    flex: 1;
    min-width: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 90px;
  margin-top: 10px;

  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 10px;

  font-size: 14px;
  resize: none;

  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.15);
  }
`;

export const PaymentButton = styled.div`
  width: 100%;
  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 14px;

  border-radius: 8px;
  border: 1px solid #4caf50;

  background: #e8f5e9;
  color: #2e7d32;

  font-size: 14px;
  cursor: pointer;

  box-sizing: border-box;

  transition: all 0.2s ease;

  &:hover {
    background: #dff1e1;
    transform: translateY(-1px);
  }
`;

export const PaymentRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  width: 100%;
`;

export const PaymentOption = styled.div`
  flex: 1;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;

  cursor: pointer;

  box-sizing: border-box;

  transition: all 0.2s ease;

  &:hover {
    border-color: #888;
    transform: translateY(-1px);
  }
`;
