import styled from 'styled-components';
export const FormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 12px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f8f6f1 0%, #f1ede5 40%, #eae6dc 100%);
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;
export const DeliveryTimeSelectContainer = styled.div`
  width: 160px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid black;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
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
export const BorderDown = styled.div`
  position: relative;
  margin-top: 20px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
`;
export const OrderContainer = styled.div`
  padding: 0 16;
`;
