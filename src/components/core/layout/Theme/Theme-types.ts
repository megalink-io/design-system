import { DefaultTheme } from 'styled-components';

export interface Themes {
  light: DefaultTheme;
  dark: DefaultTheme;
}

export interface ContainerProps {
  /** - */
  children: React.ReactNode;
}
