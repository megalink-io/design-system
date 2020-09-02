import React from 'react';
import * as Types from 'types';

const House: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <g fill="none" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3">
      <path strokeLinecap="round" d="M1.04 21.35L24.47 6.4l22.95 14.95" />
      <path d="M9.2 16.15v25.6h31.5V17.02" />
      <path strokeLinecap="round" d="M35.1 13.28V8h4.48v8.23" />
    </g>
  </svg>
);

export default House;
