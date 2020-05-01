import styled from 'styled-components';
import { Color } from './StatusLight-types';

export const StatusLight = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Dot = styled('span')<{ color: Color }>(({ theme, color }) => ({
  display: 'inline-block',
  height: '8rem',
  width: '8rem',
  borderRadius: '50%',
  backgroundColor: theme.colors[color][1000],
  boxShadow: `0 0 6rem ${theme.colors[color][600]}`,
  [`${StatusLight}.disabled &`]: {
    backgroundColor: theme.colors[color === 'white' || color === 'black' ? color : 'gray'][200],
    boxShadow: 'none',
  },
  '& + .Detail': {
    marginLeft: '20rem',
  },
}));
