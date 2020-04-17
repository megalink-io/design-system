import React from 'react';
import * as Types from 'types';

const NerdFace: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 72 72" {...props}>
    <circle cx={36} cy={36} r={23} fill="#FCEA2B" />
    <path
      fill="#FFF"
      d="M32.14 47.37c-.28 1.73-.43 5.5 3.86 4.64v-4.37m3.86-.27c.28 1.73.43 5.5-3.86 4.64v-4.37"
    />
    <circle
      cx={36}
      cy={36}
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
      d="M19.07 30.4s-.95 8.56 6.86 7.93c2.62-.22 7.82-.65 7.87-8.35 0-.7 0-1.6-.8-2.63-1.07-1.36-3.58-1.97-9.95-1.42 0 0-3.45-.1-3.98 4.48z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M19.14 29.87l-.43-3.37 3.83-.52m30.39 4.42s.96 8.56-6.86 7.93c-2.62-.22-7.81-.65-7.87-8.35 0-.7.01-1.6.82-2.63 1.06-1.36 3.57-1.97 9.94-1.42 0 0 3.45-.1 3.97 4.48zM31.7 26.36s4.12 2.53 8.65 0m-6.55 4.9s2.13-3.75 4.39 0"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M52.86 29.88l.43-3.37-3.83-.53m-15.31 3.99s1.8-3.75 3.7 0"
    />
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32.14 47.37c-.28 1.73-.43 5.5 3.86 4.64v-4.37"
    />
    <path d="M30 31a3 3 0 11-6 0 3 3 0 016 0m18 0a3 3 0 11-6 0 3 3 0 016 0" />
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M39.86 47.37c.28 1.73.43 5.5-3.86 4.64v-4.37"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M45.81 44.8c-6.57 3.53-14.04 3.66-19.62 0"
    />
  </svg>
);

export default NerdFace;
