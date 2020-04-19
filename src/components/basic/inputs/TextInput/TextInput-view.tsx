import React from 'react';
import { ViewProps, TextTypeProps } from './TextInput-types';
import {
  TextInput,
  Label,
  Required,
  Input,
  Textarea,
  Error,
  ErrorMessage,
} from './TextInput-styles';

const TextInputView: React.FC<ViewProps> = ({
  className,
  name,
  type,
  label,
  placeholder,
  value,
  textareaElement,
  currentError,
  errorElement,
  onChange,
  onBlur,
  required,
  disabled,
  ...props
}) => {
  const { multiline } = props as TextTypeProps;
  return (
    <TextInput className={className} htmlFor={name}>
      {label && (
        <Label id={`${name}-label`}>
          {label}
          {required && <Required> *</Required>}
        </Label>
      )}
      {type === 'text' && multiline ? (
        <Textarea
          aria-label={!label && placeholder ? placeholder : undefined}
          aria-labelledby={label ? `${name}-label` : undefined}
          aria-required={required}
          ref={textareaElement}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          rows={typeof multiline === 'number' ? multiline : 1}
          onChange={e => onChange(e.target.value)}
          onBlur={e => onBlur(e.target.value)}
          required={required}
          disabled={disabled}
        />
      ) : (
        <Input
          aria-label={!label && placeholder ? placeholder : undefined}
          aria-labelledby={label ? `${name}-label` : undefined}
          aria-required={required}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={e => onBlur(e.target.value)}
          required={required}
          disabled={disabled}
        />
      )}
      {currentError && (
        <Error ref={errorElement}>
          <ErrorMessage>{currentError}</ErrorMessage>
        </Error>
      )}
    </TextInput>
  );
};

export default TextInputView;
