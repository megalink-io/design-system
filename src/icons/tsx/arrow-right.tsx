import React from 'react';
import * as Types from 'types';

const ArrowRight: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 20 48" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M1.5 38.842l17.038-14.29L1.5 10.262"
    />
  </svg>
);

export default ArrowRight;
