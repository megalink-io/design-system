import styled, { DefaultTheme, CSSObject } from 'styled-components';
import { Link } from 'react-router-dom';

const getLinkCSS = (theme: DefaultTheme): CSSObject => ({
  '&.underlined': {
    textDecoration: 'underline',
  },
  '.tabbing &:focus': {
    outline: `auto ${theme.colors.blue[1000]}`,
    outlineOffset: '2rem',
  },
});

export const ExternalLink = styled('a')(({ theme }) => getLinkCSS(theme));

export const InternalLink = styled(Link)(({ theme }) => getLinkCSS(theme));
