import styled, { CSSObject } from 'styled-components';
import { Design } from './DesignPreset-types';

const getDesignPresetBackground = (design: Design) => {
  if (design.document.backgroundVariant === 'color' && design.document.backgroundColor) {
    return design.document.backgroundColor;
  }
  if (
    design.document.backgroundVariant === 'line_gradient' &&
    design.document.backgroundLineGradient
  ) {
    return design.document.backgroundLineGradient;
  }
  return '#fff';
};

export const DesignPreset = styled('button')<{ design: Design }>(({ theme, design }) => ({
  height: '180rem',
  width: '180rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: getDesignPresetBackground(design),
  border: `solid 2rem ${theme.colors.gray[75]}`,
  borderRadius: '10rem',
  cursor: 'pointer',
  '&:hover': {
    border: `solid 2rem ${theme.colors.gray[200]}`,
  },
  '&.selected': {
    border: `solid 2rem ${theme.colors.blue[1000]}`,
    cursor: 'default',
  },
  '.tabbing &:focus': {
    outline: `auto ${theme.colors.blue[1000]}`,
  },
  '@media (max-width: 768px)': {
    height: '120rem',
    width: '120rem',
  },
}));

const getElementBorderRadius = (design: Design) => {
  const shape = design.elements.button?.shape || design.elements.default.shape;
  if (shape === 'round') {
    return '50%';
  }
  if (shape === 'rounded') {
    return '10rem';
  }
  return '0';
};

const getElementBackgroundCSS = (design: Design): CSSObject => {
  const backgroundVariant =
    design.elements.button?.backgroundVariant ||
    design.elements.default.backgroundVariant;
  const backgroundColor =
    design.elements.button?.backgroundColor || design.elements.default.backgroundColor;
  if (backgroundVariant === 'outlined') {
    return {
      border: `solid 4rem ${backgroundColor}`,
    };
  }
  return {
    backgroundColor,
  };
};

const getElementShadow = (design: Design) => {
  const shadowVariant =
    design.elements.button?.shadowVariant || design.elements.default.shadowVariant;
  const shadowColor =
    design.elements.button?.shadowColor || design.elements.default.shadowColor;
  if (shadowVariant === 'soft') {
    return `8rem 8rem 8rem ${shadowColor}`;
  }
  if (shadowVariant === 'hard') {
    return `8rem 8rem 0 ${shadowColor}`;
  }
  return 'none';
};

export const Element = styled('div')<{ design: Design }>(({ design }) => ({
  height: '100rem',
  width: '100rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: getElementBorderRadius(design),
  ...getElementBackgroundCSS(design),
  boxShadow: getElementShadow(design),
  '& svg': {
    height: '48rem',
    '& path': {
      fill: design.elements.button?.fontColor || design.elements.default.fontColor,
    },
  },
  '@media (max-width: 768px)': {
    height: '60rem',
    width: '60rem',
    '& svg': {
      height: '32rem',
    },
  },
}));
