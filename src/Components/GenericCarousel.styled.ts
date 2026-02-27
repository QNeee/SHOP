import styled from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 0 16px;
  gap: 20px;
  padding-bottom: 5px;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0077ff;
    border-radius: 4px;
    border: 2px solid #f0f0f0;
  }
  scrollbar-width: thin;
  scrollbar-color: #0077ff #f0f0f0;
`;
export const Slide = styled.img`
  flex: 0 0 100%;
  height: 149px;
  width: 100vw;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    height: 180px;
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 300px;
  }
  @media screen and (min-width: 1280px) {
    height: 500px;
  }
  scroll-snap-align: center;
  border-radius: 16px;
  object-fit: cover;
`;
export const Button = styled.button`
  width: 131px;
  height: 44px;
  border-radius: 8px;
  background-color: darkblue;
  color: white;
  &:hover {
    background-color: lightblue;
    color: gray;
  }
`;
