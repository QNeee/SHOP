import styled from 'styled-components';

export const SelectBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  font-family: 'Inter', sans-serif;
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: #bdbdbd;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const SelectTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
`;

export const Arrow = styled.span<{ $open: boolean }>`
  display: inline-block;
  font-size: 18px;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  transform: rotate(${(props) => (props.$open ? '90deg' : '0deg')});
  color: ${(props) => (props.$open ? '#0077ff' : '#999')};
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 6px;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  animation: slideDown 0.25s forwards;

  @keyframes slideDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Option = styled.div`
  padding: 12px 18px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f7ff;
    color: #0077ff;
  }

  &:active {
    background: #e0f0ff;
  }
`;
