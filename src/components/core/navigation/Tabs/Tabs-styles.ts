import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Tabs = styled('div')(({ theme }) => ({
  height: '38rem',
  position: 'relative',
  left: '-20rem',
  width: 'calc(100% + 40rem)',
  '&::before, &::after': {
    content: '""',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '20rem',
  },
  '&::before': {
    left: 0,
    background: `linear-gradient(90deg, ${theme.colors.gray[0]}, ${theme.colors.gray[0]}00)`,
  },
  '&::after': {
    right: 0,
    background: `linear-gradient(90deg, ${theme.colors.gray[0]}00, ${theme.colors.gray[0]})`,
  },
  '@media (max-width: 768px)': {
    height: '32rem',
  },
}));

export const Scrollbar = styled('nav')({
  display: 'inline-block',
  position: 'relative',
  height: '100%',
  maxWidth: '100%',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const Link = styled(NavLink)(({ theme }) => ({
  fontSize: '15rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  color: theme.colors.gray[500],
  whiteSpace: 'nowrap',
  margin: '0 20rem',
  userSelect: 'none',
  transition: 'color 0.1s ease-out',
  '&:hover, &.active': {
    color: theme.colors.gray[900],
  },
  '& + &': {
    marginLeft: '38rem',
  },
  '@media (max-width: 768px)': {
    fontSize: '13rem',
    '& + &': {
      marginLeft: '12rem',
    },
  },
}));

export const Indicator = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  height: '2rem',
  borderRadius: '2rem',
  backgroundColor: theme.colors.gray[800],
  '&.active': {
    transition: 'left 0.2s ease-out, width 0.2s ease-out',
  },
}));
