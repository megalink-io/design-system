import styled from 'styled-components';
import { StylesProps } from './Subheading-types';

export const Subheading = styled('h3')<StylesProps>(({ theme, color }) => ({
  fontSize: '18rem',
  fontWeight: 500,
  lineHeight: 1.6,
  color: theme.colors[color || 'gray'][1000],
  '@media (max-width: 768px)': {
    fontSize: '17rem',
  },
}));
