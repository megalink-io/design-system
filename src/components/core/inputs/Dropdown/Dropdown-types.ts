export interface ContainerProps {
  name: string;
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  error: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  slim?: boolean;
}

export interface ViewProps extends ContainerProps {
  className: string;
  expanded: boolean;
  highlighted: string;
  listElement: React.RefObject<HTMLUListElement>;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  onKeyDown: (key: string) => void;
  onClick: () => void;
}
