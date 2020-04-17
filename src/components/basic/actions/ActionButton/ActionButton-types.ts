import { DefaultTheme } from 'styled-components';

type Color = 'gray' | 'yellow' | 'red' | 'blue' | 'green';

export interface StylesProps {
  theme: DefaultTheme;
  color?: Color;
}

export interface ViewProps {
  type: 'submit' | 'button';
  kind: 'primary' | 'secondary' | 'tertiary';
  label: string;
  color?: Color;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}
