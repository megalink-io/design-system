import styled from 'styled-components';
import { StylesProps } from './Paragraph-types';

export const Paragraph = styled('p')<StylesProps>(({ theme, color }) => ({
  fontSize: '16rem',
  fontWeight: 400,
  lineHeight: 1.6,
  color: theme.colors[color || 'gray'][700],
  '@media (max-width: 768px)': {
    fontSize: '15rem',
  },
}));
