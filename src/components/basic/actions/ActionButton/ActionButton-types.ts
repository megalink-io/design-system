import { DefaultTheme } from 'styled-components';

export type Color = 'white' | 'black' | 'gray' | 'yellow' | 'red' | 'blue' | 'green' | undefined;

export interface DefaultProps {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  color?: Color;
}

export interface ButtonProps extends DefaultProps {
  type: 'button';
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export interface SubmitProps extends DefaultProps {
  type: 'submit';
  loading?: boolean;
  disabled?: boolean;
}

export interface InternalLinkProps extends DefaultProps {
  type: 'link';
  to: string;
  replace?: boolean;
}

export interface ExternalLinkProps extends DefaultProps {
  type: 'link';
  external: true;
  href: string;
  target?: '_blank';
  download?: boolean | string;
}

export type ViewProps = ButtonProps | SubmitProps | InternalLinkProps | ExternalLinkProps;

export interface StylesProps {
  theme: DefaultTheme;
  color?: Color;
}
