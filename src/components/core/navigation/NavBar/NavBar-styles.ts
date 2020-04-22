import styled from 'styled-components';

export const NavBar = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > *:first-child': {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  '& > * + *': {
    marginLeft: '30rem',
  },
  '@media (max-width: 768px)': {
    '& > * + *': {
      marginLeft: '15rem',
    },
  },
});
