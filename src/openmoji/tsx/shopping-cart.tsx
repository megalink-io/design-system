import React from 'react';
import * as Types from 'types';

const ShoppingCart: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 72 72" {...props}>
    <path fill="#D0CFCE" d="M51.9 18.6v23.76H15.02L11.35 18.6z" />
    <circle cx={50.14} cy={58.46} r={2.38} fill="#D0CFCE" />
    <circle cx={14.03} cy={58.46} r={2.38} fill="#D0CFCE" />
    <path
      fill="#9B9B9A"
      d="M45.66 23.64v.79m0 12.32v.79m-5.37-13.9v.79m0 12.32v.79m-5.38-13.9v.79m0 12.32v.79m-5.37-13.9v.79m0 12.32v.79m-5.38-13.9v.79m0 12.32v.79m-5.38-13.9v.79m0 12.32v.79M45.66 30v.79M40.29 30v.79M34.91 30v.79M29.54 30v.79M24.16 30v.79M18.78 30v.79"
    />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M51.9 18.6v23.76H15.02L11.35 18.6zm0 0l3.6-7.52h5.15M14.03 51.86h37.88" />
      <circle cx={50.14} cy={58.46} r={2.38} />
      <circle cx={14.03} cy={58.46} r={2.38} />
      <path d="M51.9 42.36s4.84.35 4.84 4.78c0 5.13-4.58 4.72-4.58 4.72m-6.5-28.22v.79m0 12.32v.79m-5.37-13.9v.79m0 12.32v.79m-5.38-13.9v.79m0 12.32v.79m-5.37-13.9v.79m0 12.32v.79m-5.38-13.9v.79m0 12.32v.79m-5.38-13.9v.79m0 12.32v.79M45.66 30v.79M40.29 30v.79M34.91 30v.79M29.54 30v.79M24.16 30v.79M18.78 30v.79" />
    </g>
  </svg>
);

export default ShoppingCart;
