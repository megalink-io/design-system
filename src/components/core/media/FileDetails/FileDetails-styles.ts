import styled from 'styled-components';

export const FileDetails = styled('div')({
  '& > .Detail + .Detail': {
    marginTop: '8rem',
  },
});

export const Image = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '5rem',
  '& + .Detail': {
    marginTop: '40rem',
  },
});
