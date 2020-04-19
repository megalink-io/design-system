import React from 'react';
import * as Types from 'types';

const Night: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      fill="none"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M40.663 17.807l-1.58-5.288-1.58 5.288-5.288 1.58 5.288 1.58 1.58 5.288 1.58-5.288 5.288-1.58zM28.78 4.755L27.957 2l-.823 2.755-2.755.822 2.755.823.823 2.755.823-2.755 2.754-.823zm2.338 33.622c-3.291 5.471-7.686 7.112-12.654 7.106A16.472 16.472 0 011.999 29.001c0-10.3 9.572-17.806 19.727-15.935-4.515 3.662-6.536 7.743-6.533 12.389 0 8.07 7.933 14.441 15.925 12.922z"
    />
  </svg>
);

export default Night;
