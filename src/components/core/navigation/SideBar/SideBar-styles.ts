import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBar = styled('aside')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.colors.black[1000],
}));

export const Content = styled('div')({
  height: '100%',
  width: '70rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowY: 'auto',
});

export const Menu = styled('nav')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .IconButton': {
    margin: '12.5rem 0',
    '&:focus, &:hover': {
      backgroundColor: theme.colors.gray[50],
      borderColor: theme.colors.gray[50],
    },
    '& svg': {
      opacity: 0.5,
      transition: 'opacity 0.2s ease',
    },
    '&.active svg, &:hover svg, &:focus svg': {
      opacity: 0.9,
    },
  },
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  width: '40rem',
  height: '40rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outline: 'none',
  margin: '20rem 0',
  '.tabbing &:focus': {
    outline: `2rem auto ${theme.colors.blue[1000]}`,
  },
}));
