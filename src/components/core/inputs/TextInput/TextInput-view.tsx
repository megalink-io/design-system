import React from 'react';
import { InputLabel, InputError } from 'components/core/inputs';
import { ViewProps, TextTypeProps } from './TextInput-types';
import { TextInput, Input, Textarea } from './TextInput-styles';

const TextInputView: React.FC<ViewProps> = ({
  className,
  name,
  type,
  label,
  placeholder,
  value,
  error,
  textareaElement,
  onChange,
  onBlur,
  required,
  disabled,
  ...props
}) => {
  const { multiline } = props as TextTypeProps;
  return (
    <TextInput className={className}>
      {label && (
        <InputLabel
          label={label}
          htmlFor={name}
          required={required}
          disabled={disabled}
        />
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
          onChange={(e) => onChange(e.target.value)}
          onBlur={(e) => onBlur(e.target.value)}
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
          onChange={(e) => onChange(e.target.value)}
          onBlur={(e) => onBlur(e.target.value)}
          required={required}
          disabled={disabled}
        />
      )}
      <InputError error={error} />
    </TextInput>
  );
};

export default TextInputView;
