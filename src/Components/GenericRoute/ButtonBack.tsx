import type { FC } from 'react';

interface IButtonBackProps {
  onClick: () => void;
}
export const ButtonBack: FC<IButtonBackProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.58533 1L1.31123 7.91039C0.910473 8.29111 0.894622 8.92476 1.27584 9.32504L8.58533 17"
        stroke="#0C0C0C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
