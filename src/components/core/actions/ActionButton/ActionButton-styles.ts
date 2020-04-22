import styled, { DefaultTheme, CSSObject } from 'styled-components';
import { Link } from 'react-router-dom';
import { StylesProps, Color } from './ActionButton-types';

const getActionButtonCSS = (theme: DefaultTheme, color: Color): CSSObject => ({
  height: '40rem',
  padding: '0 30rem',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderWidth: '1.5rem',
  borderRadius: '25rem',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  '&:disabled, &.loading': {
    cursor: 'default',
  },
  '&:focus': {
    outline: 'none',
  },
  '&.primary': {
    color: theme.colors[color || 'gray'][0],
    backgroundColor: theme.colors[color || 'gray'][color ? 1000 : 700],
    borderColor: theme.colors[color || 'gray'][color ? 1000 : 700],
    '&:focus, &:hover': {
      backgroundColor: theme.colors[color || 'gray'][color ? 700 : 500],
      borderColor: theme.colors[color || 'gray'][color ? 700 : 500],
    },
    '&:disabled': {
      backgroundColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][100],
      borderColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][100],
    },
  },
  '&.secondary': {
    color: theme.colors[color || 'gray'][color ? 1000 : 700],
    backgroundColor: theme.colors[color || 'gray'][0],
    borderColor: theme.colors[color || 'gray'][color ? 1000 : 700],
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][100] : theme.colors.gray[50],
    },
    '&:disabled': {
      color: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      borderColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][100],
      '&:focus, &:hover': {
        backgroundColor: theme.colors[color || 'gray'][0],
      },
      '.CircleLoader': {
        borderTopColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      },
    },
  },
  '&.tertiary': {
    color: theme.colors[color || 'gray'][color ? 1000 : 700],
    backgroundColor: theme.colors[color || 'gray'][0],
    borderColor: theme.colors[color || 'gray'][0],
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][100] : theme.colors.gray[50],
      borderColor: color ? theme.colors[color][100] : theme.colors.gray[50],
    },
    '&:disabled': {
      color: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      '&:focus, &:hover': {
        backgroundColor: theme.colors[color || 'gray'][0],
        borderColor: theme.colors[color || 'gray'][0],
      },
      '.CircleLoader': {
        borderTopColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      },
    },
  },
  '@media (max-width: 768px)': {
    height: '36rem',
    padding: '0 25rem',
  },
});

export const ActionButton = styled('button')<StylesProps>(({ theme, color }) =>
  getActionButtonCSS(theme, color)
);

export const InternalLink = styled(Link)<StylesProps>(({ theme, color }) =>
  getActionButtonCSS(theme, color)
);

export const ExternalLink = styled('a')<StylesProps>(({ theme, color }) =>
  getActionButtonCSS(theme, color)
);

export const Label = styled('span')({
  fontSize: '15rem',
  fontWeight: 500,
  [`${ActionButton}.loading &`]: {
    opacity: 0,
    visibility: 'hidden',
    height: 0,
  },
  '@media (max-width: 768px)': {
    fontSize: '13rem',
  },
});
