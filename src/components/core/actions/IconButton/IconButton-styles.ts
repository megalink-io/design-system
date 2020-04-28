import styled, { DefaultTheme, CSSObject } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StylesProps, Color } from './IconButton-types';

const getIconButtonCSS = (theme: DefaultTheme, color: Color): CSSObject => ({
  position: 'relative',
  width: '40rem',
  height: '40rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10rem',
  cursor: 'pointer',
  borderStyle: 'solid',
  borderWidth: '1.5rem',
  boxSizing: 'border-box',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  '&:focus': {
    outline: 'none',
  },
  '&:disabled, &.loading': {
    cursor: 'default',
  },
  '& svg': {
    height: '22rem',
    maxHeight: '22rem',
    maxWidth: '22rem',
  },
  '&.primary': {
    backgroundColor: theme.colors[color || 'gray'][color ? 1000 : 700],
    borderColor: theme.colors[color || 'gray'][color ? 1000 : 700],
    '& svg path': {
      stroke: theme.colors[color || 'gray'][0],
    },
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
    backgroundColor: theme.colors[color || 'gray'][0],
    borderColor: theme.colors[color || 'gray'][color ? 1000 : 700],
    '& svg path': {
      stroke: theme.colors[color || 'gray'][color ? 1000 : 700],
    },
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][100] : theme.colors.gray[50],
    },
    '&:disabled': {
      borderColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][100],
      '&:focus, &:hover': {
        backgroundColor: theme.colors[color || 'gray'][0],
      },
      '& svg path': {
        stroke: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      },
      '.CircleLoader': {
        borderTopColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      },
    },
  },
  '&.tertiary': {
    backgroundColor: theme.colors[color || 'gray'][0],
    borderColor: theme.colors[color || 'gray'][0],
    '& svg path': {
      stroke: theme.colors[color || 'gray'][color ? 1000 : 700],
    },
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][100] : theme.colors.gray[50],
      borderColor: color ? theme.colors[color][100] : theme.colors.gray[50],
    },
    '&:disabled': {
      '&:focus, &:hover': {
        backgroundColor: theme.colors[color || 'gray'][0],
        borderColor: theme.colors[color || 'gray'][0],
      },
      '& svg path': {
        stroke: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      },
      '.CircleLoader': {
        borderTopColor: theme.colors[color === 'black' || color === 'white' ? color : 'gray'][200],
      },
    },
  },
});

export const IconButton = styled('button')<StylesProps>(({ theme, color }) =>
  getIconButtonCSS(theme, color)
);

export const InternalLink = styled(NavLink)<StylesProps>(({ theme, color }) =>
  getIconButtonCSS(theme, color)
);

export const ExternalLink = styled('a')<StylesProps>(({ theme, color }) =>
  getIconButtonCSS(theme, color)
);

export const Counter = styled('span')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: '15%',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '16rem',
  minWidth: '16rem',
  backgroundColor: '#DC2F02',
  borderRadius: '8rem',
  fontSize: '10rem',
  fontWeight: 500,
  color: theme.colors.white[1000],
  padding: '0 5rem',
  boxSizing: 'border-box',
  boxShadow: '0 1rem 6rem rgb(0, 0, 0, 0.2)',
  userSelect: 'none',
}));
