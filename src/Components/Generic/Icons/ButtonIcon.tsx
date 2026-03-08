import type { FC } from 'react';
import { useState } from 'react';
import { Paths } from '../../../Helper';

interface IButtonIconcon {
  direction?: 'prev' | 'next';
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  hidden?: boolean;
  pathname?: string;
}

export const ButtonIcon: FC<IButtonIconcon> = ({
  direction = 'prev',
  onClick,
  hidden,
  pathname = '',
}) => {
  const [hover, setHover] = useState(false);
  const isBase = pathname === Paths.base + '/';
  const offset = !isBase ? (direction === 'prev' ? '-80px' : '80px') : '0';
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === 'next' ? 'rotate(180deg)' : 'none',
        opacity: hidden ? 0 : 1,
        transition: 'all 0.2s ease',
        pointerEvents: hidden ? 'none' : 'auto',
        cursor: 'pointer',
        transformOrigin: 'center',
        scale: hover ? 1.1 : 1,
        position: 'relative',
        left: offset,
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      id={direction}
    >
      <rect
        x="-1"
        y="1"
        width="50"
        height="50"
        rx="25"
        transform="matrix(-1 0 0 1 50 0)"
        stroke={hover ? '#000' : 'black'}
        fill={hover ? '#333' : 'black'}
        strokeWidth="2"
        style={{ transition: 'all 0.2s ease' }}
      />
      <path
        d="M32 16L20.9418 24.7544C20.4519 25.1423 20.4337 25.8795 20.904 26.291L32 36"
        stroke={hover ? '#fff' : 'red'}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transition: 'all 0.2s ease' }}
      />
    </svg>
  );
};
