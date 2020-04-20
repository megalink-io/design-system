import styled from 'styled-components';
import { StylesProps } from './Detail-types';

export const Detail = styled('span')<StylesProps>(({ theme, color }) => ({
  display: 'block',
  fontSize: '15rem',
  fontWeight: 300,
  lineHeight: 1.6,
  color: theme.colors[color || 'gray'][500],
  '@media (max-width: 768px)': {
    fontSize: '13rem',
  },
}));
