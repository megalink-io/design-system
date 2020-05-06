import React, { useRef, useLayoutEffect } from 'react';
import { ContainerProps, TextTypeProps } from './TextInput-types';
import TextInputView from './TextInput-view';

/**
 * A text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 * */
export const TextInputContainer: React.FC<ContainerProps> = React.memo(props => {
  const { name, value, error, onChange, onBlur, required, disabled } = props;
  const { multiline } = props as TextTypeProps;
  const textareaElement = useRef<HTMLTextAreaElement>(null);

  // Update textarea element inline styles when value changes
  useLayoutEffect(() => {
    if (multiline && textareaElement.current) {
      textareaElement.current.style.height = 'inherit';
      textareaElement.current.style.height = `${textareaElement.current.scrollHeight}px`;
    }
  }, [value, multiline]);

  const getClassName = () => {
    let className = 'TextInput';
    if (error) className += ' error';
    if (required) className += ' required';
    if (disabled) className += ' disabled';
    return className;
  };

  const handleChange = (newValue: string) => {
    onChange(name, newValue);
  };

  const handleBlur = (newValue: string) => {
    onBlur(name, newValue);
  };

  return (
    <TextInputView
      {...props}
      className={getClassName()}
      textareaElement={textareaElement}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
});

export default TextInputContainer;
