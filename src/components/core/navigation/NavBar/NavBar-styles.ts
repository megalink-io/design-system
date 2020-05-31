import styled from 'styled-components';

export const NavBar = styled('header')({
  height: '50rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > *:first-child': {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  '& > *:not(.Tabs) + *': {
    marginLeft: '30rem',
  },
  '@media (max-width: 768px)': {
    height: '40rem',
    '& > *:not(.Tabs) + *': {
      marginLeft: '15rem',
    },
  },
});
