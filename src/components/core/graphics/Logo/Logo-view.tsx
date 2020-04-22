import React from 'react';
import { useTheme } from 'styled-components';
import { ViewProps } from './Logo-types';

/** The Megalink logo, icon or lettering as SVG graphic. */
export const LogoView: React.FC<ViewProps> = React.memo(({ variant, size, fontColor }) => {
  const theme = useTheme();

  const getFontColor = () => {
    if (fontColor === 'black') {
      return theme.colors.black[1000];
    }
    if (fontColor === 'white') {
      return theme.colors.white[1000];
    }
    return theme.colors.gray[1000];
  };

  // Return Megalink logo or icon
  if (variant === 'logo' || variant === 'icon') {
    const getRandomId = (prefix: string): string =>
      `${prefix}-${Math.floor(Math.random() * 100000)}`;
    const id1 = getRandomId('a');
    const id2 = getRandomId('b');
    const id3 = getRandomId('c');

    return (
      <svg
        className="Logo"
        viewBox={variant === 'logo' ? '0 0 1554 350' : '0 0 342 342'}
        height={size === 'medium' ? '28rem' : '22rem'}
        aria-label="Megalink Logo"
      >
        <defs>
          <linearGradient
            id={id1}
            x1=".24"
            x2=".82"
            y1=".09"
            y2=".96"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor={theme.colors.red[1000]} stopOpacity="0" />
            <stop offset=".77" stopColor={theme.colors.red[1000]} />
            <stop offset="1" stopColor={theme.colors.yellow[1000]} />
          </linearGradient>
          <linearGradient
            id={id2}
            x1=".5"
            x2=".63"
            y1=".03"
            y2=".64"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor={theme.colors.blue[1000]} />
            <stop offset="1" stopColor={theme.colors.blue[1000]} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={id3}
            x1="-.04"
            x2=".33"
            y1=".45"
            y2=".61"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor={theme.colors.green[1000]} />
            <stop offset="1" stopColor={theme.colors.blue[1000]} stopOpacity="0" />
          </linearGradient>
        </defs>
        {variant === 'logo' && (
          <path
            fill={getFontColor()}
            d="M1554 278h-35.84l-56.18-77.31 59.4-63.7 19.74 18.42-42.82 45.92L1554 278zm-124.98 0V77h30v201zM1314.02 278h-30V139h30v18c3.27-3.87 21.72-20 45-20 50.05 0 51 53.92 51 73v68h-30v-68c0-16.72.25-46-28-46-22.51 0-38 18.66-38 46v68zM1222.01 278V139h30v139zm-3-178a18 18 0 0118-18 18 18 0 0118 18 18 18 0 01-18 18 18 18 0 01-18-18zM1160.01 77h30v201h-30zM1054.01 280c-40.54 0-67-32.87-67-70 0-39.88 24.16-73 67-73 25.12 0 37.48 12.47 44 20v-18h30v139h-30v-19c-5.69 6.3-17.65 21-44 21zm-37-70c0 23.1 18.2 42 37 42 26.39 0 44-18.57 44-42 0-26.27-16.37-45-44-45-17.29 0-37 16.24-37 45zM896 350c-13.44 0-35.82-3.22-52-16l12-24a76.81 76.81 0 0040 12c45.96 0 42-35.28 42-61-8.3 11.43-24.65 19-42 19-31.11 0-68-19.73-68-71 0-50.14 36.82-72 68-72 23.9 0 36.16 13.41 42 20v-18h30v115c0 35.57 2.8 96-72 96zm42-141c0-25.78-14.38-44-42-44-19.34 0-38 18.58-38 44 0 25.62 18.13 44 38 44 24.02 0 42-16.68 42-44zM683 208c0-38.82 22.81-71 67-71 50.82 0 66.65 45.8 62 83h-98c4 22.48 30.89 42.47 74 26l10 24c-59.24 27.91-115-2.96-115-62zm67-44c-28.8 0-35.98 31.92-36 32h68c0-.08-3.19-32-32-32zM454 278V64l105 132L664 64v214h-30V150l-75 94-75-94v128z"
          />
        )}
        <g className="icon" transform="translate(-84.48 -366.6)">
          <circle
            cx="171"
            cy="171"
            r="171"
            fill={theme.colors.white[1000]}
            transform="translate(84.48 366.6)"
          />
          <circle
            cx="171"
            cy="171"
            r="171"
            fill={`url(#${id1})`}
            transform="translate(84.48 366.6)"
          />
          <circle
            cx="171"
            cy="171"
            r="171"
            fill={`url(#${id2})`}
            transform="translate(84.48 366.6)"
          />
          <circle
            cx="171"
            cy="171"
            r="171"
            fill={`url(#${id3})`}
            transform="translate(84.48 366.6)"
          />
          <path
            fill={theme.colors.white[1000]}
            d="M168.58 626.39V445.67l86.6 109.18 87.53-109.18V626.4h-29.18v-98.83l-58.35 72.47-57.42-72.47v98.83z"
          />
        </g>
      </svg>
    );
  }

  // Return only Megalink font
  return (
    <svg
      className="Logo"
      viewBox="0 0 1100 286"
      height={size === 'medium' ? '28rem' : '22rem'}
      aria-label="Megalink Logo"
    >
      <path
        fill={getFontColor()}
        d="M1100 214h-35.84l-56.18-77.31 59.4-63.7 19.74 18.42-42.82 45.92L1100 214zm-124.98 0V13h30v201zM860.02 214h-30V75h30v18c3.27-3.87 21.72-20 45-20 50.05 0 51 53.92 51 73v68h-30v-68c0-16.72.25-46-28-46-22.51 0-38 18.66-38 46v68zM768.01 214V75h30v139zm-3-178a18 18 0 0118-18 18 18 0 0118 18 18 18 0 01-18 18 18 18 0 01-18-18zM706.01 13h30v201h-30zM600.01 216c-40.54 0-67-32.87-67-70 0-39.88 24.16-73 67-73 25.12 0 37.48 12.47 44 20V75h30v139h-30v-19c-5.69 6.3-17.65 21-44 21zm-37-70c0 23.1 18.2 42 37 42 26.39 0 44-18.56 44-42 0-26.27-16.37-45-44-45-17.29 0-37 16.25-37 45zM442 286c-13.44 0-35.82-3.22-52-16l12-24a76.81 76.81 0 0040 12c45.96 0 42-35.28 42-61-8.3 11.43-24.65 19-42 19-31.11 0-68-19.73-68-71 0-50.14 36.82-72 68-72 23.9 0 36.16 13.41 42 20V75h30v115c0 35.57 2.8 96-72 96zm42-141c0-25.78-14.38-44-42-44-19.34 0-38 18.58-38 44 0 25.62 18.13 44 38 44 24.02 0 42-16.68 42-44zM229 144c0-38.82 22.81-71 67-71 50.82 0 66.65 45.8 62 83h-98c4 22.48 30.89 42.47 74 26l10 24c-59.24 27.91-115-2.96-115-62zm67-44c-28.8 0-35.98 31.92-36 32h68c0-.08-3.19-32-32-32zM0 214V0l105 132L210 0v214h-30V86l-75 94-75-94v128z"
      />
    </svg>
  );
});

export default LogoView;
