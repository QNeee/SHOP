import styled from "styled-components";


export const DeliverySelectContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;

  background: linear-gradient(135deg, #1f1f1f, #2b2b2b);
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    background: linear-gradient(135deg, #262626, #333333);
    border-color: rgba(139, 92, 246, 0.45);
    transform: translateY(-2px);
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(139, 92, 246, 0.08);
  }
`;