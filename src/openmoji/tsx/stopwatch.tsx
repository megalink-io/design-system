import React from 'react';
import * as Types from 'types';

const Stopwatch: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 72 72" {...props}>
    <path
      fill="#d0cfce"
      stroke="#d0cfce"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M53.76 19.74l4.58-3.55 3.06 3.95-4.25 3.3"
    />
    <path fill="#d0cfce" d="M31.31 7h11.01v6.29H31.31z" />
    <circle cx={36.82} cy={36.29} r={23} fill="#FFF" />
    <circle
      cx={36.82}
      cy={36.29}
      r={23}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M56.37 17.72l1.97-1.53 3.06 3.95-1.83 1.42M32.32 9.73V7h9v2.9"
    />
    <circle cx={36.35} cy={16.98} r={1} />
    <circle cx={36.35} cy={55.02} r={1} />
    <ellipse
      cx={49.8}
      cy={22.55}
      rx={0.99}
      ry={1.01}
      transform="rotate(-45 49.8 22.55)"
    />
    <ellipse
      cx={22.9}
      cy={49.45}
      rx={0.99}
      ry={1.01}
      transform="rotate(-45 22.9 49.45)"
    />
    <circle cx={55.37} cy={36} r={1} />
    <circle cx={17.33} cy={36} r={1} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M36.84 35.91h-15.4m15.44.02L26 46.81"
    />
    <ellipse
      cx={49.8}
      cy={49.45}
      rx={1.01}
      ry={0.99}
      transform="rotate(-45 49.8 49.45)"
    />
    <ellipse
      cx={22.9}
      cy={22.55}
      rx={1.01}
      ry={0.99}
      transform="rotate(-45 22.9 22.55)"
    />
  </svg>
);

export default Stopwatch;
