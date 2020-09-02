import React from 'react';
import * as Types from 'types';

const List: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 41 48" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M39.26 37.47H12.51m26.75-13.23H12.51m26.75-13.98H12.51M4.92 40.55a3.1 3.1 0 01-3.08-3.08 3.15 3.15 0 013.08-3.08 3.08 3.08 0 010 6.16zM4.7 27.32a3.08 3.08 0 110-6.16 3.08 3.08 0 010 6.16zm.37-13.9a3.08 3.08 0 010-6.16 3.08 3.08 0 110 6.16z"
    />
  </svg>
);

export default List;
