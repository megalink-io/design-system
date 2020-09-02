export type Color = 'gray' | 'yellow' | 'red' | 'blue' | 'green' | undefined;

interface DefaultProps {
  icon: React.ReactNode;
  label: string;
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
  href: string;
  target?: '_blank';
  download?: boolean | string;
}

export type ContainerProps =
  | ButtonProps
  | SubmitProps
  | InternalLinkProps
  | ExternalLinkProps;

export type ViewProps = ContainerProps & {
  className: string;
};

export interface StylesProps {
  color?: Color;
}
