import styled from 'styled-components';

export const Response = styled('div')({
  // position: 'relative',
  // zIndex: -1,
  maxHeight: 0,
  opacity: 0,
  visibility: 'hidden',
  '&.open': {
    visibility: 'visible',
    transition: 'max-height 0.3s ease, opacity 0.3s ease 0.1s',
  },
  '&.close': {
    visibility: 'visible',
    transition: 'max-height 0.3s ease 0.2s, opacity 0.3s ease',
  },
});

export const Message = styled('span')(({ theme }) => ({
  display: 'block',
  padding: '20rem 0',
  fontSize: '15rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: theme.colors.gray[700],
  [`${Response}.success &`]: {
    color: theme.colors.green[1000],
  },
  [`${Response}.error &`]: {
    color: theme.colors.red[1000],
  },
  '@media (max-width: 768px)': {
    fontSize: '14rem',
  },
}));
