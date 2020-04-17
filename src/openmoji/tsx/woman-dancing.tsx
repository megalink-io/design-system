import React from 'react';
import * as Types from 'types';

const WomanDancing: React.FC<Types.SVGProps> = props => (
  <svg viewBox="0 0 72 72" {...props}>
    <g fill="#fcea2b">
      <circle cx={34.06} cy={9.73} r={3} />
      <path d="M17.8 24.45c.87 1.62 1.72 1.43 2.3 1.24l9.05-3.05 5.72-2.67 1.9 1.24 1.63 4.39-2.57 2.28-9.54 6.58L12 40.28l.96 2.86 17.92-4.77 7.82-2.86 2.57 12.01 1.05 14.68h2.86L46.3 46V31.7l-.95-13.35-1.9-1.9 5.8-2.77 6.78-4.3s1.14-.85.28-2.95L51.36 9.4l-9.34 4.96-4.57 1.14-4.2 2.29-2.76 1.62-5.53 2.57z" />
    </g>
    <g fill="none" stroke="#000" strokeWidth={2}>
      <circle cx={33.92} cy={9.87} r={2.86} strokeMiterlimit={10} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42.5 33.89l-9.82 3.72c-.95.38-2.57.85-3.62 1.14l-14.3 3.81a1.8 1.8 0 01-2.29-.95c-.29-.76.29-1.72 1.34-2.2l10.77-4.38a22.59 22.59 0 003.33-1.8l6.4-4.4a37.2 37.2 0 002.85-2.19 3.2 3.2 0 00.67-2.95l-.29-.86a6.08 6.08 0 00-1.62-2.38 6.86 6.86 0 01-.95-.57"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M38.69 35.5l2.1 10.2c.18 1.06.47 2.77.56 3.82l.77 10.77c.1 1.05.76 1.91 1.52 1.91a1.81 1.81 0 001.53-1.9l.95-12.4c.1-1.05.1-2.76.1-3.81V33.6c0-1.05-.1-2.76-.1-3.81l-.67-9.53a6.67 6.67 0 00-1.43-3.24l-2.47-2.58"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M55.56 6.91l-5.72 3.72a22.06 22.06 0 01-3.34 1.71l-3.52 1.34c-.96.38-2.58.95-3.63 1.24l-2.57.76a14.18 14.18 0 00-3.43 1.62l-2.67 1.9a22.05 22.05 0 01-3.34 1.72l-8.67 3.15M29.92 9.52s-.66-.02-.87.39c-.25.48-.01 1.8-.25 2.5a3.36 3.36 0 01-1.3 1.75"
      />
    </g>
  </svg>
);

export default WomanDancing;
