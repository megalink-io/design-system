import styled, { keyframes, css, DefaultTheme } from 'styled-components';
import { StylesProps, Size, Color } from './CircleLoader-types';

const getWidthOrHeight = (size: Size, deviceType: 'desktop' | 'mobile') => {
  if (deviceType === 'desktop') {
    if (size === 'large') return '50rem';
    if (size === 'medium') return '34rem';
    return '18rem';
  }
  if (size === 'large') return '40rem';
  if (size === 'medium') return '28rem';
  return '16rem';
};

const getBorderWidth = (size: Size) => {
  if (size === 'large') return '3rem';
  if (size === 'medium') return '2.5rem';
  return '2rem';
};

const getBorderColor = (theme: DefaultTheme, color?: Color) => {
  if (color === 'colorful' || color === 'background') {
    return theme.colors.gray[0];
  }
  if (color) {
    return theme.colors[color][1000];
  }
  return theme.colors.gray[700];
};

const rotationAnimation = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const rotationColorAnimation = (theme: DefaultTheme) => {
  return keyframes({
    '0%': {
      transform: 'rotate(0deg)',
      borderTopColor: theme.colors.green[1000],
    },
    '25%': {
      transform: 'rotate(360deg)',
      borderTopColor: theme.colors.blue[1000],
    },
    '50%': {
      transform: 'rotate(720deg)',
      borderTopColor: theme.colors.red[1000],
    },
    '75%': {
      transform: 'rotate(1080deg)',
      borderTopColor: theme.colors.yellow[1000],
    },
    '100%': {
      transform: 'rotate(1440deg)',
      borderTopColor: theme.colors.green[1000],
    },
  });
};

export const CircleLoader = styled('div')<StylesProps>(
  ({ theme, color, size }) => ({
    width: getWidthOrHeight(size, 'desktop'),
    height: getWidthOrHeight(size, 'desktop'),
    borderTop: `${getBorderWidth(size)} solid ${getBorderColor(theme, color)}`,
    borderRight: `${getBorderWidth(size)} solid transparent`,
    borderRadius: '50%',
    '@media (max-width: 768px)': {
      width: getWidthOrHeight(size, 'mobile'),
      height: getWidthOrHeight(size, 'mobile'),
    },
  }),
  css<StylesProps>`
    animation: ${({ theme, color }) =>
      color === 'colorful'
        ? css`
            ${rotationColorAnimation(theme)} 2.4s linear infinite
          `
        : css`
            ${rotationAnimation} 0.6s linear infinite
          `}};
  `
);

export const Centered = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
