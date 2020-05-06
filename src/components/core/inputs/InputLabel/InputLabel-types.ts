interface DefaultProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
}

export interface LabelProps extends DefaultProps {
  as?: 'label';
  htmlFor?: string;
}

export interface SpanProps extends DefaultProps {
  as: 'span';
}

export type ViewProps = LabelProps | SpanProps;
