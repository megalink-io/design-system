import React, { useRef, useState, useEffect } from 'react';
import { ContainerProps } from './InputError-types';
import InputErrorView from './InputError-view';

/** A text element that displays an error message for input errors in form fields. */
export const InputErrorContainer: React.FC<ContainerProps> = React.memo(({ error }) => {
  const errorElement = useRef<HTMLDivElement>(null);
  const [currentError, setCurrentError] = useState<string>(error);

  // Update current error and error element when error changes
  useEffect(() => {
    let timeout: number;
    if (error && error !== currentError) {
      setCurrentError(error);
    } else if (errorElement.current) {
      if (error && error === currentError) {
        errorElement.current.style.maxHeight = `${errorElement.current.scrollHeight}px`;
        errorElement.current.style.opacity = '1';
      } else if (!error && currentError) {
        errorElement.current.style.maxHeight = '0px';
        errorElement.current.style.opacity = '0';
        timeout = setTimeout(() => {
          setCurrentError(error);
        }, 200);
      }
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
      if (errorElement.current && error && error === currentError) {
        const { scrollHeight } = errorElement.current;
        if (scrollHeight !== prevScrollHeight) {
          errorElement.current.style.maxHeight = `${scrollHeight}px`;
          prevScrollHeight = scrollHeight;
        }
      }
    };
    window.addEventListener('resize', handleResizeEvent);
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [error, currentError]);

  if (currentError) {
    return <InputErrorView error={currentError} errorElement={errorElement} />;
  }

  return null;
});

export default InputErrorContainer;
