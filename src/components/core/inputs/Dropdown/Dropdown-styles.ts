import styled from 'styled-components';

export const Dropdown = styled('div')({
  textAlign: 'left',
});

export const Field = styled('div')({
  position: 'relative',
  [`${Dropdown}.slim &`]: {
    display: 'table',
  },
  '.InputLabel + &': {
    marginTop: '10rem',
  },
  '& + .InputError span': {
    paddingTop: '8rem',
  },
});

export const Button = styled('button')(({ theme }) => ({
  width: '100%',
  height: '54rem',
  padding: '0 20rem',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  justifyContent: 'space-between',
  fontSize: '16rem',
  border: `solid 1.5rem ${theme.colors.gray[75]}`,
  borderRadius: '10rem',
  cursor: 'pointer',
  transition: 'border 0.1s ease',
  [`${Dropdown}.slim &`]: {
    height: '44rem',
    padding: '0 15rem',
  },
  '&:hover': {
    border: `solid 1.5rem ${theme.colors.gray[200]}`,
  },
  '.tabbing &:focus': {
    outline: `4rem auto ${theme.colors.blue[1000]}`,
  },
  [`${Dropdown}.expanded &, &:focus`]: {
    border: `solid 1.5rem ${theme.colors.blue[1000]}`,
  },
  [`${Dropdown}.error &`]: {
    border: `solid 1.5rem ${theme.colors.red[700]}`,
  },
  '&:disabled': {
    border: `solid 1.5rem ${theme.colors.gray[100]}`,
    backgroundColor: theme.colors.gray[100],
    cursor: 'default',
  },
  '& svg': {
    height: '22rem',
    maxHeight: '22rem',
    maxWidth: '22rem',
    marginLeft: '20rem',
    transition: 'transform 0.2s ease-out',
    '& path': {
      stroke: theme.colors.gray[500],
    },
    [`${Dropdown}.expanded &`]: {
      transform: 'rotate(180deg)',
    },
  },
  '&:disabled svg path': {
    stroke: theme.colors.gray[300],
  },
  '@media (max-width: 768px)': {
    height: '50rem',
    [`${Dropdown}.slim &`]: {
      height: '40rem',
    },
  },
}));

export const ButtonLabel = styled('span')(({ theme }) => ({
  fontSize: '16rem',
  fontWeight: 400,
  lineHeight: 'normal',
  color: theme.colors.gray[700],
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  [`${Dropdown}.placeholder &, ${Button}:disabled &`]: {
    color: theme.colors.gray[300],
  },
  '@media (max-width: 768px)': {
    fontSize: '15rem',
  },
}));

export const List = styled('ul')(({ theme }) => ({
  zIndex: 1,
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  maxHeight: '198rem',
  overflowY: 'auto',
  display: 'block',
  padding: '12rem 0',
  boxSizing: 'border-box',
  backgroundColor: theme.colors.gray[0],
  border: `solid 1.5rem ${theme.colors.gray[200]}`,
  borderRadius: '10rem',
  boxShadow: '0 2rem 6rem rgb(0, 0, 0, 0.1)',
  visibility: 'hidden',
  opacity: 0,
  transform: 'translateY(0) scaleY(0.8)',
  transformOrigin: 'top',
  transition: 'opacity 0.15s ease, transform 0.15s ease, visibility 0s ease 0.15s',
  [`${Dropdown}.expanded &`]: {
    visibility: 'visible',
    opacity: 1,
    transform: 'translateY(8rem) scaleY(1)',
    transition: 'opacity 0.15s ease-out, transform 0.15s ease-out, visibility 0s ease',
  },
}));

export const Item = styled('li')<{ highlighted: boolean }>(({ highlighted, theme }) => ({
  minHeight: '40rem',
  padding: '0 20rem',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.gray[highlighted ? 50 : 0],
  cursor: 'pointer',
  '& svg': {
    height: '22rem',
    maxHeight: '22rem',
    maxWidth: '22rem',
    marginLeft: '20rem',
    '& path': {
      stroke: theme.colors.blue[1000],
    },
  },
  '&:hover': {
    backgroundColor: theme.colors.gray[50],
  },
}));

export const ItemLabel = styled('span')(({ theme }) => ({
  fontSize: '16rem',
  fontWeight: 400,
  color: theme.colors.gray[700],
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '@media (max-width: 768px)': {
    fontSize: '15rem',
  },
}));
