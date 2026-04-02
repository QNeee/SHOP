import styled from 'styled-components';

export const DeleteCardModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  max-width: calc(100% - 32px);
  padding: 24px;
  border-radius: 20px;
  background: #1f1f1f;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  z-index: 1000;
`;

export const DeleteCardTitle = styled.h3`
  margin: 0 0 24px 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  color: #fff;
`;

export const DeleteCardButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const BaseButton = styled.button`
  flex: 1;
  height: 48px;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease,
    background 0.2s ease;

  &:hover {
    opacity: 0.92;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const DeleteButtonNo = styled(BaseButton)`
  background: #2f2f2f;
  color: #fff;
`;

export const DeleteButtonYes = styled(BaseButton)`
  background: #e53935;
  color: #fff;
`;
