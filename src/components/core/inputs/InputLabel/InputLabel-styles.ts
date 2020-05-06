import styled, { DefaultTheme } from 'styled-components';

const getInputLabelCSS = (theme: DefaultTheme) => ({
  display: 'inline-block',
  fontSize: '15rem',
  fontWeight: 500,
  color: theme.colors.gray[700],
  '&.disabled': {
    color: theme.colors.gray[500],
  },
  '@media (max-width: 768px)': {
    fontSize: '14rem',
  },
});

export const Label = styled('label')(({ theme }) => ({
  ...getInputLabelCSS(theme),
}));

export const Span = styled('span')(({ theme }) => ({
  ...getInputLabelCSS(theme),
}));

export const Required = styled('span')(({ theme }) => ({
  fontSize: '110%',
  marginLeft: '8rem',
  color: theme.colors.red[1000],
  [`${Label}.disabled &, ${Span}.disabled &`]: {
    color: theme.colors.gray[500],
  },
}));
