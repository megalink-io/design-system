import styled from 'styled-components';
import { StylesProps } from './Heading-types';

export const Heading = styled('h2')<StylesProps>(({ theme, color }) => ({
  fontSize: '22rem',
  fontWeight: 500,
  lineHeight: 1.6,
  color: theme.colors[color || 'gray'][1000],
  '@media (max-width: 768px)': {
    fontSize: '20rem',
  },
}));
