import React from 'react';
import * as Types from 'types';

const FlagGermany: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 72 72" {...props}>
    <path fill="#f1b31c" d="M5 17h62v38H5z" />
    <path fill="#d22f27" d="M5 30h62v12H5z" />
    <path d="M5 17h62v13H5z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 17h62v38H5z"
    />
  </svg>
);

export default FlagGermany;
