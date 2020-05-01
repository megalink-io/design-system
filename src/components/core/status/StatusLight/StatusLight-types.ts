export type Color = 'white' | 'black' | 'gray' | 'yellow' | 'red' | 'blue' | 'green';

export interface ViewProps {
  color: Color;
  label?: string;
  disabled?: boolean;
}
