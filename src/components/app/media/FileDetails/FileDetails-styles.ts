import styled from 'styled-components';

export const FileDetails = styled('div')({});

export const Image = styled('img')({
  width: '100%',
  height: 'auto',
  '& + .Detail': {
    marginTop: '40rem',
  },
});
