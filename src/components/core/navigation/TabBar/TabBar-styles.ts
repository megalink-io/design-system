import styled from 'styled-components';

export const TabBar = styled('nav')(({ theme }) => ({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100vw',
  height: '60rem',
  backgroundColor: theme.colors.gray[0],
  boxShadow: '0 0 8rem rgb(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  '& .IconButton': {
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
