import { DefaultTheme } from 'styled-components';

export type Color = 'white' | 'black' | 'gray' | 'yellow' | 'red' | 'blue' | 'green' | undefined;

interface DefaultProps {
  icon: React.ReactNode;
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  color?: Color;
  counter?: number;
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
  exact?: boolean;
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
