import React from 'react';
import * as Types from 'types';

const Warning: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 46 48" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
      <path
        strokeMiterlimit="10"
        d="M2.67 40.83L23.03 4.2a.45.45 0 01.72 0l19.81 36.56a.39.39 0 01-.32.57H2.99a.3.3 0 01-.32-.49zm21.01-24.81v13.31"
      />
      <path d="M23.78 35.7h-.25a.63.63 0 01-.63-.63v-.25a.6.6 0 01.63-.63h.25a.63.63 0 01.62.63v.25a.6.6 0 01-.62.63z" />
    </g>
  </svg>
);

export default Warning;
