type Color = 'black' | 'white';

export interface ViewProps {
  /** - */
  children: React.ReactNode | string;
  color?: Color;
}

export interface StylesProps {
  color?: Color;
}
