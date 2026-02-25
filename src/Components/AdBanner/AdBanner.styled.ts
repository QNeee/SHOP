import styled from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  padding: 0 30px;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const AdSection = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Slide = styled.img`
  flex: 0 0 100%;
  height: 149px;
  width: 100%;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    height: 180px;
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 300px;
  }
  scroll-snap-align: center;
  border-radius: 16px;
  object-fit: cover;
`;
