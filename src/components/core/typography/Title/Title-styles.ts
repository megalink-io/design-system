import styled from 'styled-components';
import { StylesProps } from './Title-types';

export const Title = styled('h1')<StylesProps>(({ theme, color }) => ({
  fontSize: '26rem',
  fontWeight: 500,
  lineHeight: 1.6,
  color: theme.colors[color || 'gray'][1000],
  '@media (max-width: 768px)': {
    fontSize: '22rem',
  },
}));
