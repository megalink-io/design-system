import React from 'react';
import * as Types from 'types';

const Alarm: React.FC<Types.SVGProps> = (props) => (
  <svg viewBox="0 0 35 48" {...props}>
    <path
      fill="none"
      d="M17.51 36.87h15.35a.36.36 0 00.33-.33v-2.9a.3.3 0 00-.08-.25 34.44 34.44 0 01-3.48-3.48C27.55 26.58 31.7 10.66 22.08 9c-.17 0-.25-.17-.25-.34-1.16-5.22-2.66-4.64-4.23-4.64-1.58.09-3.15-.5-4.23 4.65 0 .16-.08.33-.25.33-9.62 1.66-5.47 17.59-7.55 20.9a27.54 27.54 0 01-3.47 3.5.3.3 0 00-.09.25v2.9a.36.36 0 00.34.33zm-5.81.5s.26 5.97 5.23 5.97 4.98-5.97 4.98-5.97"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
    />
  </svg>
);

export default Alarm;
