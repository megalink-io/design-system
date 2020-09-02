import React from 'react';
import * as Types from 'types';

const SmilingFaceWithSunglasses: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 72 72" {...props}>
    <circle cx={36} cy={36} r={23} fill="#FCEA2B" />
    <path
      fill="#3F3F3F"
      d="M45.33 38.56c3.96 0 7.18-2.86 7.18-6.39 0-1.76.45-3.52-.85-4.68s-4.35-1.7-6.33-1.7c-2.36 0-5.14.14-6.45 1.7-.9 1.06-.73 3.25-.73 4.68 0 3.53 3.22 6.4 7.18 6.4zm-19.59 0c3.96 0 7.18-2.86 7.18-6.39 0-1.76.44-3.52-.86-4.68s-4.34-1.7-6.32-1.7c-2.36 0-5.14.14-6.45 1.7-.9 1.06-.73 3.25-.73 4.68 0 3.53 3.21 6.4 7.18 6.4z"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <circle cx={35.89} cy={36.06} r={23} />
      <path d="M45.7 44.86c-6.57 3.53-14.04 3.66-19.63 0m-7.19-14.4s-.95 8.55 6.86 7.92c2.62-.21 7.82-.65 7.87-8.34 0-.7 0-1.6-.81-2.63-1.07-1.37-3.57-1.97-9.94-1.42 0 0-3.45-.1-3.98 4.47z" />
      <path d="M18.95 29.93l-.43-3.37 3.83-.53m30.39 4.43s.95 8.55-6.86 7.92c-2.62-.21-7.82-.65-7.87-8.34 0-.7.01-1.6.81-2.63 1.07-1.37 3.58-1.97 9.95-1.42 0 0 3.45-.1 3.97 4.47zM31.5 26.42s4.13 2.53 8.66 0m-6.62 4.9s2.2-3.75 4.53 0" />
      <path d="M52.66 29.93l.44-3.37-3.84-.53m-15.31 4s1.8-3.75 3.7 0" />
    </g>
  </svg>
);

export default SmilingFaceWithSunglasses;
