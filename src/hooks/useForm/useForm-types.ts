export interface TextInputInfo {
  type: 'text_input';
  validation: (state: string, fields: Fields) => string;
  value?: string;
}

export interface CheckboxInfo {
  type: 'checkbox';
  validation: (state: boolean, fields: Fields) => boolean;
  selected?: boolean;
}

export interface FieldInfos {
  [name: string]: TextInputInfo | CheckboxInfo;
}

export interface TextInput {
  name: string;
  value: string;
  error: string;
  onChange: (name: string, state: string) => void;
  onBlur: (name: string, state: string) => void;
}

export interface Checkbox {
  name: string;
  selected: boolean;
  error: boolean;
  onChange: (name: string, state: boolean) => void;
}

export interface Fields {
  [name: string]: TextInput | Checkbox;
}

export interface Button {
  loading: boolean;
}

export interface Response {
  status: '' | 'info' | 'success' | 'error';
  message: string;
}
