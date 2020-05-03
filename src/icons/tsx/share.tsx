import React from 'react';
import * as Types from 'types';

const Share: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 38 48" {...props}>
    <g fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={3}>
      <path
        d="M2 24.13a4.92 4.92 0 019.83 0 4.92 4.92 0 01-9.83 0zm24.17-13.22a4.92 4.92 0 019.83 0 4.93 4.93 0 01-4.92 4.92 4.83 4.83 0 01-4.9-4.92zm0 26.43a4.92 4.92 0 019.83 0 4.93 4.93 0 01-4.92 4.92 4.88 4.88 0 01-4.9-4.92z"
        strokeLinecap="round"
      />
      <path d="M10.94 21.23l15.55-8.3m-15.63 14.1l15.55 8.62" />
    </g>
  </svg>
);

export default Share;
