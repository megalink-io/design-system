import styled from 'styled-components';
import { StylesProps } from './ActionButton-types';

export const ActionButton = styled('button')<StylesProps>(({ theme, color }) => ({
  height: '40rem',
  padding: '0 30rem',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '25rem',
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  '&:disabled, &.loading': {
    cursor: 'default',
  },
  '&:focus': {
    outline: 'none',
  },
  '&.primary': {
    color: theme.colors.gray[0],
    backgroundColor: color ? theme.colors[color][1000] : theme.colors.gray[700],
    border: `solid 1.5rem ${color ? theme.colors[color][1000] : theme.colors.gray[700]}`,
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][700] : theme.colors.gray[500],
      border: `solid 1.5rem ${color ? theme.colors[color][700] : theme.colors.gray[500]}`,
    },
    '&:disabled': {
      color: theme.colors.gray[0],
      backgroundColor: theme.colors.gray[100],
      border: `solid 1.5rem ${theme.colors.gray[100]}`,
    },
  },
  '&.secondary': {
    color: color ? theme.colors[color][1000] : theme.colors.gray[700],
    backgroundColor: 'transparent',
    border: `solid 1.5rem ${color ? theme.colors[color][1000] : theme.colors.gray[700]}`,
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][100] : theme.colors.gray[75],
    },
    '&:disabled': {
      color: theme.colors.gray[200],
      backgroundColor: 'transparent',
      border: `solid 1.5rem ${theme.colors.gray[100]}`,
      '.CircleLoader': {
        borderTopColor: theme.colors.gray[200],
      },
    },
  },
  '&.tertiary': {
    color: color ? theme.colors[color][1000] : theme.colors.gray[700],
    backgroundColor: 'transparent',
    border: 'solid 1.5rem transparent',
    '&:focus, &:hover': {
      backgroundColor: color ? theme.colors[color][100] : theme.colors.gray[75],
      border: `solid 1.5rem ${color ? theme.colors[color][100] : theme.colors.gray[75]}`,
    },
    '&:disabled': {
      color: theme.colors.gray[200],
      backgroundColor: 'transparent',
      border: 'solid 1.5rem transparent',
      '.CircleLoader': {
        borderTopColor: theme.colors.gray[200],
      },
    },
  },
  '@media (max-width: 768px)': {
    height: '36rem',
    padding: '0 25rem',
  },
}));

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
