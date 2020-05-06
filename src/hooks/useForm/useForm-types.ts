/* TextInput interfaces ----------------------------------- */

export interface TextInputInfo {
  type: 'text_input';
  validate: (value: string, fieldsState: FieldsState) => string;
  value?: string;
}

export interface TextInputState {
  value: string;
  error: string;
}

export interface TextInputUpdate {
  value?: string;
  error?: string;
}

export interface TextInput extends TextInputState {
  name: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
}

/* Dropdown interfaces ------------------------------------ */

export interface DropdownInfo {
  type: 'dropdown';
  options: {
    label: string;
    value: string;
  }[];
  validate: (value: string, fieldsState: FieldsState) => string;
  value?: string;
}

export interface DropdownState {
  value: string;
  error: string;
}

export interface DropdownUpdate {
  value?: string;
  error?: string;
}

export interface Dropdown extends TextInputState {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (name: string, value: string) => void;
  onBlur: (name: string, value: string) => void;
}

/* Checkbox interfaces ------------------------------------ */

export interface CheckboxInfo {
  type: 'checkbox';
  validate: (value: boolean, fields: FieldsState) => boolean;
  selected?: boolean;
}

export interface CheckboxState {
  selected: boolean;
  error: boolean;
}

export interface CheckboxUpdate {
  selected?: boolean;
  error?: boolean;
}

export interface Checkbox extends CheckboxState {
  name: string;
  onChange: (name: string, value: boolean) => void;
  onBlur: (name: string, value: boolean) => void;
}

/* Fields interfaces -------------------------------------- */

export interface FieldsInfo {
  [name: string]: TextInputInfo | DropdownInfo | CheckboxInfo;
}

export interface FieldsState {
  [name: string]: TextInputState | DropdownState | CheckboxState;
}

export interface FieldsUpdate {
  [name: string]: TextInputUpdate | DropdownUpdate | CheckboxUpdate;
}

export interface Fields {
  [name: string]: TextInput | Dropdown | Checkbox;
}

/* Response interface ------------------------------------- */

export interface ResponseState {
  status: '' | 'information' | 'success' | 'error';
  message: string;
}

export interface ResponseUpdate {
  status?: '' | 'information' | 'success' | 'error';
  message?: string;
}

export interface Response extends ResponseState {}

/* Button interface --------------------------------------- */

export interface ButtonState {
  loading: boolean;
}

export interface ButtonUpdate {
  loading?: boolean;
}

export interface Button extends ButtonState {}

/* Form interfaces ---------------------------------------- */

export interface FormState {
  fields: FieldsState;
  response: ResponseState;
  button: ButtonState;
}

export interface Form {
  fields: Fields;
  response: Response;
  button: Button;
  updateFields: (fieldsUpdate: FieldsUpdate) => void;
  updateResponse: (responseUpdate: ResponseUpdate) => void;
  updateButton: (buttonUpdate: ButtonUpdate) => void;
  validate: () => void;
}
