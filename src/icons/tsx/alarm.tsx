import React from 'react';
import * as Types from 'types';

const Alarm: React.FC<Types.SVGProps> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M23.71 36.52h14.77a.34.34 0 00.32-.32v-2.8a.3.3 0 00-.08-.23 33.14 33.14 0 01-3.35-3.35c-2-3.2 2-18.53-7.27-20.12-.16 0-.24-.16-.24-.32-1.11-5.03-2.55-4.47-4.07-4.47-1.51.08-3.03-.48-4.07 4.47 0 .16-.08.32-.24.32-9.26 1.6-5.27 16.93-7.26 20.12a26.5 26.5 0 01-3.36 3.35.3.3 0 00-.08.24v2.8a.34.34 0 00.32.32zm-5.59.48s.24 5.75 5.03 5.75 4.8-5.75 4.8-5.75"
    />
  </svg>
);

export default Alarm;
