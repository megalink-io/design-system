import styled, { DefaultTheme, CSSObject } from 'styled-components';

export const TextInput = styled('label')({
  display: 'block',
  textAlign: 'left',
});

export const Label = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '15rem',
  fontWeight: 500,
  color: theme.colors.gray[700],
  marginBottom: '10rem',
  '.TextInput.disabled &': {
    color: theme.colors.gray[500],
  },
  '@media (max-width: 768px)': {
    fontSize: '14rem',
  },
}));

export const Required = styled('span')(({ theme }) => ({
  fontSize: '110%',
  color: theme.colors.red[1000],
  '.TextInput.disabled &': {
    color: theme.colors.gray[500],
  },
}));

const getInputAndTextareaCSS = (theme: DefaultTheme): CSSObject => ({
  width: '100%',
  padding: '0 20rem',
  boxSizing: 'border-box',
  fontSize: '16rem',
  fontWeight: 400,
  lineHeight: 'normal',
  color: theme.colors.gray[700],
  backgroundColor: 'transparent',
  border: `solid 1.5rem ${theme.colors.gray[75]}`,
  borderRadius: '10rem',
  outline: 'none',
  transition: 'border 0.1s ease',
  '&::placeholder': {
    color: theme.colors.gray[300],
  },
  '&:hover': {
    border: `solid 1.5rem ${theme.colors.gray[200]}`,
  },
  '&:focus': {
    border: `solid 1.5rem ${theme.colors.blue[1000]}`,
  },
  [`${TextInput}.error &`]: {
    border: `solid 1.5rem ${theme.colors.red[700]}`,
  },
  '&:disabled': {
    color: theme.colors.gray[300],
    border: `solid 1.5rem ${theme.colors.gray[100]}`,
    backgroundColor: theme.colors.gray[100],
  },
  '@media (max-width: 768px)': {
    fontSize: '15rem',
  },
});

export const Input = styled('input')(({ theme }) => ({
  ...getInputAndTextareaCSS(theme),
  height: '54rem',
  '@media (max-width: 768px)': {
    height: '50rem',
  },
}));

export const Textarea = styled('textarea')(({ theme }) => ({
  ...getInputAndTextareaCSS(theme),
  resize: 'none',
  padding: '15rem 20rem',
  '@media (max-width: 768px)': {
    padding: '13rem 20rem',
  },
}));

export const Error = styled('div')({
  maxHeight: 0,
  opacity: 0,
  transition: 'all 0.2s ease',
});

export const ErrorMessage = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '13rem',
  fontWeight: 400,
  color: theme.colors.red[1000],
  lineHeight: 1.4,
  paddingTop: '7rem',
  '@media (max-width: 768px)': {
    fontSize: '12rem',
  },
}));
