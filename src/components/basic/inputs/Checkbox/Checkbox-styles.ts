import styled from 'styled-components';

export const Checkbox = styled('label')({
  display: 'flex',
  cursor: 'pointer',
  '&.disabled': {
    cursor: 'default',
  },
});

export const Input = styled('input')({
  position: 'absolute',
  zIndex: -1,
  opacity: 0,
});

export const Checkmark = styled('span')(({ theme }) => ({
  height: '20rem',
  width: '20rem',
  display: 'inline-block',
  boxSizing: 'border-box',
  border: `solid 2rem ${theme.colors.gray[200]}`,
  borderRadius: '5rem',
  transition: 'border 0.1s ease',
  '& svg': {
    height: '100%',
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
    opacity: 0,
    transform: 'scale(0.5)',
    transition: 'opacity 0.1s ease, transform 0.1s ease',
    '& path': {
      stroke: theme.colors.gray[700],
      strokeWidth: 8,
    },
  },
  [`${Checkbox}:hover &`]: {
    border: `solid 2rem ${theme.colors.gray[300]}`,
  },
  [`${Checkbox}.selected &`]: {
    border: `solid 2rem ${theme.colors.gray[700]}`,
    '& svg': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  [`${Checkbox}.disabled &`]: {
    border: `solid 2rem ${theme.colors.gray[100]}`,
    '& svg path': {
      stroke: theme.colors.gray[100],
    },
  },
  [`${Checkbox}.error &`]: {
    border: `solid 2rem ${theme.colors.red[700]}`,
  },
  [`.tabbing ${Input}:focus + &`]: {
    border: `solid 2rem ${theme.colors.blue[1000]}`,
    '& svg path': {
      stroke: theme.colors.blue[1000],
    },
  },
}));

export const Label = styled('span')(({ theme }) => ({
  flex: 1,
  fontSize: '15rem',
  fontWeight: 400,
  color: theme.colors.gray[700],
  lineHeight: 1.5,
  marginLeft: '15rem',
  userSelect: 'none',
  [`${Checkbox}.disabled &`]: {
    color: theme.colors.gray[200],
  },
  '@media (max-width: 768px)': {
    fontSize: '14rem',
  },
}));
