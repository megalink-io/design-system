import styled, { DefaultTheme, CSSObject } from 'styled-components';
import { Link } from 'react-router-dom';
import { StylesProps, Color } from './FloatingButton-types';

const getIconButtonCSS = (theme: DefaultTheme, color: Color): CSSObject => ({
  zIndex: 400,
  position: 'fixed',
  right: '50rem',
  bottom: '50rem',
  width: '60rem',
  height: '60rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors[color || 'gray'][color ? 1000 : 700],
  boxShadow: '0 4rem 6rem rgb(0, 0, 0, 0.15)',
  borderRadius: '50%',
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: 'background-color 0.2s ease',
  '&:focus, &:hover': {
    backgroundColor: theme.colors[color || 'gray'][color ? 700 : 500],
  },
  '&:focus': {
    outline: 'none',
  },
  '&:disabled': {
    backgroundColor: theme.colors.gray[100],
  },
  '&:disabled, &.loading': {
    cursor: 'default',
  },
  '& svg': {
    height: '24rem',
    maxHeight: '24rem',
    maxWidth: '24rem',
    '& path': {
      stroke: theme.colors[color || 'gray'][0],
    },
  },
  '@media (max-width: 768px)': {
    right: '20rem',
    bottom: '20rem',
    width: '54rem',
    height: '54rem',
    '&.with-tab-bar': {
      bottom: '76rem', // 20rem plus TabBar height
    },
    '& svg': {
      height: '22rem',
      maxHeight: '22rem',
      maxWidth: '22rem',
    },
  },
});

export const FloatingButton = styled('button')<StylesProps>(({ theme, color }) =>
  getIconButtonCSS(theme, color)
);

export const InternalLink = styled(Link)<StylesProps>(({ theme, color }) =>
  getIconButtonCSS(theme, color)
);

export const ExternalLink = styled('a')<StylesProps>(({ theme, color }) =>
  getIconButtonCSS(theme, color)
);
