import React from 'react';
import * as Types from 'types';

const Check: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 35 48" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M2.5 26.6l9.96 9.85L32.85 12.5"
    />
  </svg>
);

export default Check;
