import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
  max-width: 50%;
  overflow-x: auto;
  padding: 10px;

  border: 3px solid transparent;
  border-radius: 16px;
  background-image:
    linear-gradient(#111, #111), linear-gradient(90deg, #ff6ec4, #7873f5);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
  scrollbar-width: thin;
  scrollbar-color: #888 #222;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #222;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;
