import React from 'react';
import * as Types from 'types';

const Add: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 41 48" {...props}>
    <path
      fill="none"
      d="M20.58 6v36.86m18.28-18.29H2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
    />
  </svg>
);

export default Add;
