import React from 'react';
import * as Types from 'types';

const Copy: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 38 48" {...props}>
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
    >
      <path d="M8.98 12.66h26.53v28.9H8.98z" />
      <path d="M2.2 31.02V6h22.96" />
    </g>
  </svg>
);

export default Copy;
