import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
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
  const errorElement = useRef<HTMLDivElement>(null);
  const [currentError, setCurrentError] = useState<string>(error);

  // Update textarea element inline styles when value changes
  useLayoutEffect(() => {
    if (multiline && textareaElement.current) {
      textareaElement.current.style.height = 'inherit';
      textareaElement.current.style.height = `${textareaElement.current.scrollHeight}px`;
    }
  }, [value, multiline]);

  // Update current error and error element when error changes
  useEffect(() => {
    let timeout: number;
    if (error && error !== currentError) {
      setCurrentError(error);
    } else if (error && error === currentError) {
      errorElement.current!.style.maxHeight = `${errorElement.current!.scrollHeight}px`;
      errorElement.current!.style.opacity = '1';
    } else if (!error && currentError) {
      errorElement.current!.style.maxHeight = '0px';
      errorElement.current!.style.opacity = '0';
      timeout = setTimeout(() => {
        setCurrentError(error);
      }, 300);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [error, currentError]);

  // Update error element inline styles when window is resized
  useEffect(() => {
    let prevScrollHeight: number;
    const handleResizeEvent = () => {
      if (error && error === currentError) {
        const { scrollHeight } = errorElement.current!;
        if (scrollHeight !== prevScrollHeight) {
          errorElement.current!.style.maxHeight = `${scrollHeight}px`;
          prevScrollHeight = scrollHeight;
        }
      }
    };
    window.addEventListener('resize', handleResizeEvent);
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [error, currentError]);

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
      currentError={currentError}
      errorElement={errorElement}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
});

export default TextInputContainer;
