import type { FC } from 'react';

interface IButtonIconcon {
  direction?: 'prev' | 'next';
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  hidden?: boolean;
}

export const ButtonIcon: FC<IButtonIconcon> = ({ direction = 'prev', onClick, hidden }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === 'next' ? 'rotate(180deg)' : 'none',
        opacity: hidden ? 0 : 1,
        transition: 'opacity 0.2s ease',
        pointerEvents: hidden ? 'none' : 'auto',
      }}
      onClick={onClick}
      id={direction}
    >
      <rect
        x="-1"
        y="1"
        width="50"
        height="50"
        rx="25"
        transform="matrix(-1 0 0 1 50 0)"
        stroke="#C1C1C1"
        strokeWidth="2"
      />
      <path
        d="M32 16L20.9418 24.7544C20.4519 25.1423 20.4337 25.8795 20.904 26.291L32 36"
        stroke="#C1C1C1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
