import styled from 'styled-components';

export const InputError = styled('div')({
  maxHeight: 0,
  opacity: 0,
  transition: 'max-height 0.2s ease-out, opacity 0.2s ease-out',
});

export const Message = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '13rem',
  fontWeight: 400,
  color: theme.colors.red[1000],
  lineHeight: 1.4,
  '@media (max-width: 768px)': {
    fontSize: '12rem',
  },
}));
