import React from 'react';
import * as Types from 'types';

const FaceWithMonocle: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 72 72" {...props}>
    <circle cx="36" cy="36" r="24" fill="#FCEA2B" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M28.82 44.29c2.37-.67 11.87.53 14.05 2.06M22.3 23.34a6.3 6.3 0 014.4-1.07A6.3 6.3 0 0130.9 24m18.14 3.32c-2.41-1.73-5.35 0-8.23-.26"
    />
    <path d="M30 31a3 3 0 11-6 0 3 3 0 016 0m17 2a3 3 0 11-6 0 3 3 0 016 0" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M55.64 47.97a23 23 0 10-5.82 6.41"
    />
    <circle
      cx="43.93"
      cy="30.81"
      r="9.42"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M53.69 30.96s2.21.55 1.92 4.01-3.57 7.96-3.57 7.96-2.02 2.36-1.46 4.32c.72 2.51 4.32 6.44 4.18 8.61"
    />
  </svg>
);

export default FaceWithMonocle;
