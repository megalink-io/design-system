import { DefaultTheme } from 'styled-components';

export type Color =
  | 'colorful'
  | 'white'
  | 'black'
  | 'background'
  | 'gray'
  | 'yellow'
  | 'red'
  | 'blue'
  | 'green';

export type Size = 'large' | 'medium' | 'small';

export interface StylesProps {
  theme: DefaultTheme;
  size: Size;
  color?: Color;
}

export interface ViewProps {
  size: Size;
  color?: Color;
  centered?: boolean;
}
