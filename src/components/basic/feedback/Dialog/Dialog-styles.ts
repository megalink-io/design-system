import styled, { keyframes, css } from 'styled-components';

const fadeInAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOutAnimation = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const boxOpenAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(1.1)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
});

const boxCloseAnimation = keyframes({
  from: {
    opacity: 1,
    transform: 'scale(1)',
  },
  to: {
    opacity: 0,
    transform: 'scale(1.05)',
  },
});

export const Dialog = styled('div')({
  zIndex: 500,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Box = styled('div')(
  ({ theme }) => ({
    width: '500rem',
    maxWidth: '80%',
    maxHeight: '70%',
    overflowX: 'auto',
    padding: '30rem',
    boxSizing: 'border-box',
    backgroundColor: theme.colors.gray[0],
    borderRadius: '10rem',
    '@media (max-width: 768px)': {
      padding: '26rem',
    },
  }),
  css`
    ${Dialog}.open & {
      animation: ${boxOpenAnimation} 0.3s ease forwards;
    }
    ${Dialog}.close & {
      animation: ${boxCloseAnimation} 0.2s ease forwards;
    }
  `
);

export const Header = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '15rem',
  borderBottom: `solid 1.5rem ${theme.colors.gray[100]}`,
  '@media (max-width: 768px)': {
    paddingBottom: '12rem',
  },
}));

export const Heading = styled('h3')(({ theme }) => ({
  fontSize: '18rem',
  fontWeight: 500,
  lineHeight: 1.5,
  color: theme.colors.gray[1000],
  [`${Dialog}.error &`]: {
    color: theme.colors.red[1000],
  },
  '@media (max-width: 768px)': {
    fontSize: '17rem',
  },
}));

export const WarningIcon = styled('div')(({ theme }) => ({
  '& svg': {
    height: '22rem',
    '& path': {
      stroke: theme.colors.red[1000],
    },
  },
  '@media (max-width: 768px)': {
    '& svg': {
      height: '20rem',
    },
  },
}));

export const Message = styled('p')(({ theme }) => ({
  fontSize: '16rem',
  fontWeight: 400,
  color: theme.colors.gray[700],
  lineHeight: 1.5,
  marginTop: '20rem',
  '@media (max-width: 768px)': {
    fontSize: '15rem',
    marginTop: '16rem',
  },
}));

export const Buttons = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  '& .ActionButton': {
    marginTop: '30rem',
  },
  '& .ActionButton + .ActionButton': {
    marginTop: '20rem',
    marginLeft: '20rem',
  },
  '@media (max-width: 768px)': {
    '& .ActionButton': {
      marginTop: '26rem',
    },
    '& .ActionButton + .ActionButton': {
      marginTop: '16rem',
      marginLeft: '16rem',
    },
  },
});

export const Background = styled('div')(
  {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
  },
  css`
    ${Dialog}.open & {
      animation: ${fadeInAnimation} 0.3s ease-out forwards;
    }
    ${Dialog}.close & {
      animation: ${fadeOutAnimation} 0.2s ease forwards;
    }
  `
);
