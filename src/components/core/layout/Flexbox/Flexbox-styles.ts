import styled from 'styled-components';

export const Flexbox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& > * + *': {
    marginLeft: '30rem',
  },
  '@media (max-width: 768px)': {
    '& > * + *': {
      marginLeft: '15rem',
    },
  },
});
