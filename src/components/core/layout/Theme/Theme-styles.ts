import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle({
  'html, body, div, span, button, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, input, textarea, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    display: 'block',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote::before, blockquote::after, q::before, q::after': {
    content: 'none',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    background: 'none',
    border: 'none',
  },
  'a, button, label': {
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
});

export const FontFaces = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'), url(/poppins-light.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'), url(/poppins-regular.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'), url(/poppins-medium.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export const DefaultCSS = createGlobalStyle(({ theme }) => ({
  html: {
    fontSize: '1px',
  },
  body: {
    fontSize: '16rem',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    lineHeight: 1,
    backgroundColor: theme.colors.gray[0],
  },
  '#root': {
    paddingTop: '1px',
    marginTop: '-1px',
    outline: 'none',
  },
  'body:not(.tabbing) button:focus, body:not(.tabbing) input:focus, body:not(.tabbing) select:focus, body:not(.tabbing) textarea:focus': {
    outline: 'none',
  },
}));
