import styled from 'styled-components';

export const Scrollability = styled('div')<{ maxHeight?: string }>(({ theme, maxHeight }) => ({
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    width: '20rem',
  },
  '&.horizontal': {
    left: '-20rem',
    width: 'calc(100% + 40rem)',
    '&::before, &::after': {
      top: 0,
      height: '100%',
      width: '20rem',
    },
    '&::before': {
      left: 0,
      background: `linear-gradient(90deg, ${theme.colors.gray[0]}, ${theme.colors.gray[0]}00)`,
    },
    '&::after': {
      right: 0,
      background: `linear-gradient(90deg, ${theme.colors.gray[0]}00, ${theme.colors.gray[0]})`,
    },
  },
  '&.vertical': {
    top: '-20rem',
    height: `calc(${maxHeight || 0} + 40rem)`,
    '&::before, &::after': {
      left: 0,
      height: '20rem',
      width: '100%',
    },
    '&::before': {
      top: 0,
      background: `linear-gradient(0deg, ${theme.colors.gray[0]}00, ${theme.colors.gray[0]})`,
    },
    '&::after': {
      bottom: 0,
      background: `linear-gradient(0deg, ${theme.colors.gray[0]}, ${theme.colors.gray[0]}00)`,
    },
  },
}));

export const ScrollBox = styled('div')({
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  [`${Scrollability}.horizontal &`]: {
    maxWidth: '100%',
    overflowX: 'auto',
  },
  [`${Scrollability}.vertical &`]: {
    maxHeight: '100%',
    overflowY: 'auto',
  },
});

export const ScrollContent = styled('div')({
  [`${Scrollability}.horizontal &`]: {
    display: 'inline-flex',
    padding: '0 20rem',
    '& > * + *': {
      marginLeft: '40rem',
    },
  },
  [`${Scrollability}.vertical &`]: {
    padding: '20rem 0',
  },
  '@media (max-width: 768px)': {
    [`${Scrollability}.horizontal & > * + *`]: {
      marginLeft: '30rem',
    },
  },
});
