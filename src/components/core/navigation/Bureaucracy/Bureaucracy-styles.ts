import styled from 'styled-components';

export const Bureaucracy = styled('footer')({});

export const Links = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  [`${Bureaucracy}.centered &`]: {
    justifyContent: 'center',
  },
  '& .Link': {
    fontSize: '14rem',
    color: theme.colors.gray[400],
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    margin: '8rem 30rem 8rem 0',
    [`${Bureaucracy}.centered &`]: {
      margin: '8rem 15rem',
    },
    '&:focus, &:hover': {
      color: theme.colors.gray[600],
    },
  },
  '@media (max-width: 768px)': {
    '& .Link': {
      fontSize: '13rem',
    },
  },
}));
