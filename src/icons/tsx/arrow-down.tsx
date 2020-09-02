import React from 'react';
import * as Types from 'types';

const ArrowDown: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 32 48" {...props}>
    <path
      fill="none"
      d="M1.58 15.45L15.84 32.4 30.1 15.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
    />
  </svg>
);

export default ArrowDown;
