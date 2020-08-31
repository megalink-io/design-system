import styled from 'styled-components';

export const Content = styled('div')<{ width?: string }>(({ width }) => ({
  width,
}));
