export interface ContainerProps {
  name: string;
  label: string | React.ReactNode;
  selected: boolean;
  onChange: (name: string, selected: boolean) => void;
  error: boolean;
  required?: boolean;
  disabled?: boolean;
}

export interface ViewProps extends ContainerProps {
  className: string;
  onChange: () => void;
}
