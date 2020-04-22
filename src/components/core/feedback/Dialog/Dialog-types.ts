interface DefaultButtonProps {
  label: string;
}

interface NormalButtonProps extends DefaultButtonProps {
  type: 'button';
  onClick: () => void;
}

interface InternalLinkProps extends DefaultButtonProps {
  type: 'link';
  to: string;
  replace?: boolean;
}

interface ExternalLinkProps extends DefaultButtonProps {
  type: 'link';
  href: string;
  target?: '_blank';
  download?: boolean | string;
}

type ButtonProps = NormalButtonProps | InternalLinkProps | ExternalLinkProps;

export interface ContainerProps {
  open: boolean;
  variant: 'confirmation' | 'information' | 'destructive' | 'error';
  heading: string;
  message: string;
  actionButton: ButtonProps;
  cancelButton?: ButtonProps;
}

export type ActionButtonVariant = 'primary' | 'secondary';
export type ActionButtonColor = 'gray' | 'red' | 'blue';

export type ActionButtonProps = ButtonProps & {
  variant: ActionButtonVariant;
  color: ActionButtonColor;
  loading?: boolean;
};

export type CancelButtonProps =
  | (ButtonProps & {
      variant: 'tertiary';
      loading?: boolean;
    })
  | undefined;

export interface ViewProps extends ContainerProps {
  className: string;
  actionButton: ActionButtonProps;
  cancelButton?: CancelButtonProps;
}
