import React from 'react';
import * as Types from 'types';

const Download: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 42 48" {...props}>
    <path
      fill="none"
      d="M1.2 36.03v4.84l39.68.08v-5.9M20.91 23.5L20.75 8m-7.3 15.5h15.17c.16 0 .32.24.16.32l-7.7 8.69a.25.25 0 01-.33 0l-7.54-8.53c-.25-.16-.09-.49.24-.49z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
    />
  </svg>
);

export default Download;
