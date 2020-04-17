import React from 'react';
import * as Types from 'types';

const Sun: React.FC<Types.SVGProps> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M24.06 40.192v4.062M24.06 3v4.062m21.104 15.052h-3.982m-35.2 0H2m9.557-10.752L9.885 9.69 8.292 8.097m27.634 3.424l1.672-1.752 1.593-1.513m-2.389 26.679l1.672 1.672 1.593 1.593M9.645 34.776l-1.752 1.672-1.513 1.593m5.655-14.893A12.025 12.025 0 1124.06 35.174a12.015 12.015 0 01-12.025-12.026z"
    />
  </svg>
);

export default Sun;
