import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FileGallery = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: 'calc(100% + 50rem)',
  margin: '-25rem',
  '@media (max-width: 768px)': {
    width: 'calc(100% + 20rem)',
    margin: '-10rem',
  },
});

export const ItemLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  cursor: 'pointer',
  userSelect: 'none',
  width: 'calc(33.33% - 50rem)',
  backgroundColor: theme.colors.gray[100],
  borderRadius: '5rem',
  overflow: 'hidden',
  margin: '25rem',
  '.tabbing &:focus': {
    outline: `auto ${theme.colors.blue[1000]}`,
  },
  '@media (max-width: 768px)': {
    width: 'calc(33.33% - 20rem)',
    margin: '10rem',
  },
}));

export const ItemChild = styled('div')({
  overflow: 'hidden',
  paddingBottom: '100%',
});

export const Image = styled('img')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
