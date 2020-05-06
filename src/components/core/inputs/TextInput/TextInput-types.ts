interface DefaultProps {
  name: string;
  value: string;
  error: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TextTypeProps extends DefaultProps {
  type: 'text';
  multiline?: boolean | number;
}

interface OtherTypesProps extends DefaultProps {
  type: 'email' | 'tel' | 'password' | 'url' | 'number';
}

export type ContainerProps = TextTypeProps | OtherTypesProps;

export type ViewProps = ContainerProps & {
  className: string;
  textareaElement: React.RefObject<HTMLTextAreaElement>;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
};
