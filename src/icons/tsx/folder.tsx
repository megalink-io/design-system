import React from 'react';
import * as Types from 'types';

const Folder: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 43 48" {...props}>
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="3"
    >
      <path d="M2.07 13.6h38.84a.34.34 0 01.31.33v28a.34.34 0 01-.31.33H2.06a.34.34 0 01-.32-.32V13.93a.34.34 0 01.32-.32z" />
      <path d="M38.2 13.6V9a.34.34 0 00-.32-.32H22.6a.3.3 0 01-.24-.08l-3.02-3.74a.3.3 0 00-.24-.08H4.06a.34.34 0 00-.32.31v8.6" />
    </g>
  </svg>
);

export default Folder;
