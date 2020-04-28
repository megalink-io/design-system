import styled from 'styled-components';

export const AppBar = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '90rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20rem',
  boxSizing: 'border-box',
  backgroundColor: theme.colors.black[1000],
  '& > *:first-child': {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  '& .IconButton': {
    '&:focus, &:hover': {
      backgroundColor: theme.colors.white[50],
      borderColor: theme.colors.white[50],
    },
    '& svg': {
      opacity: 0.8,
    },
  },
  '& > * + *': {
    marginLeft: '15rem',
  },
}));
