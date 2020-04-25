import React, { useRef, useState, useEffect } from 'react';
import { ContainerProps } from './Response-types';
import ResponseView from './Response-view';

/**
 * A response element that displays important text messages.
 * It is usually used at the end of a form, for example.
 */
export const ResponseContainer: React.FC<ContainerProps> = React.memo(({ status, message }) => {
  const responseElement = useRef<HTMLDivElement>(null);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentMessage, setCurrentMessage] = useState(message);

  // Update current status, current message and message element
  useEffect(() => {
    let timeout: number;
    if (message && message !== currentMessage) {
      setCurrentStatus(status);
      setCurrentMessage(message);
    } else if (message && message === currentMessage) {
      responseElement.current!.style.maxHeight = `${responseElement.current!.scrollHeight}px`;
      responseElement.current!.style.opacity = '1';
    } else if (!message && currentMessage) {
      responseElement.current!.style.maxHeight = '0px';
      responseElement.current!.style.opacity = '0';
      timeout = setTimeout(() => {
        setCurrentStatus(status);
        setCurrentMessage(message);
      }, 600);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [message, status, currentMessage]);

  // Update message element when window is resized
  useEffect(() => {
    const handleResizeEvent = () => {
      if (message && message === currentMessage) {
        responseElement.current!.style.maxHeight = `${responseElement.current!.scrollHeight}px`;
      }
    };
    window.addEventListener('resize', handleResizeEvent);
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [message, currentMessage]);

  const getClassName = () => {
    let className = 'Form-Response';
    if (currentStatus) className += ` ${currentStatus}`;
    if (message && currentMessage) className += ' open';
    if (!message && currentMessage) className += ' close';
    return className;
  };

  if (message || currentMessage) {
    return (
      <ResponseView
        className={getClassName()}
        status={status}
        message={message}
        currentMessage={currentMessage}
        responseElement={responseElement}
      />
    );
  }

  return null;
});

export default ResponseContainer;
