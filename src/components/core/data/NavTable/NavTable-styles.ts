import styled, { CSSObject } from 'styled-components';
import { Align } from './NavTable-types';

export const NavTable = styled('table')({
  width: '100%',
});

export const Head = styled('thead')({});

export const Body = styled('tbody')({});

export const Row = styled('tr')(({ theme }) => ({
  [`${Head} + ${Body} &:first-of-type, & + &`]: {
    borderTop: `solid 1rem ${theme.colors.gray[75]}`,
  },
  [`${Body} &`]: {
    cursor: 'pointer',
  },
}));

const tableCellCSS = (align: Align, primary?: boolean): CSSObject => ({
  width: primary ? '50%' : 'unset',
  maxWidth: primary ? '0' : 'unset',
  fontSize: '18rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: align || 'left',
  '& + &': {
    paddingLeft: '20rem',
  },
  '@media (max-width: 768px)': {
    fontSize: '17rem',
  },
});

export const Header = styled('th')<{ align: Align; primary?: boolean }>(
  ({ align, primary, theme }) => ({
    ...tableCellCSS(align, primary),
    height: '60rem',
    fontWeight: 400,
    color: theme.colors.gray[800],
    '@media (max-width: 768px)': {
      height: '54rem',
    },
  })
);

export const Data = styled('td')<{ align: Align; primary?: boolean }>(
  ({ align, primary, theme }) => ({
    ...tableCellCSS(align, primary),
    height: '70rem',
    fontWeight: primary ? 400 : 300,
    color: theme.colors.gray[primary ? 700 : 500],
    [`${NavTable}.headless &`]: {
      color: theme.colors.gray[primary ? 800 : 500],
    },
    '@media (max-width: 768px)': {
      height: '64rem',
    },
  })
);
