import React, { useRef, useState, useEffect } from 'react';
import { ContainerProps } from './Dropdown-types';
import DropdownView from './Dropdown-view';

/**
 * A drop-down field that allows users to select predefined values. Various decorations
 * can be displayed in or around the field to communicate the entry requirements.
 * */
export const DropdownContainer: React.FC<ContainerProps> = React.memo(props => {
  const { name, options, value, error, onChange, onBlur, required, disabled, slim } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [highlighted, setHighlighted] = useState<string>(value);
  const listElement = useRef<HTMLUListElement>(null);
  const errorElement = useRef<HTMLDivElement>(null);
  const [currentError, setCurrentError] = useState<string>(error);

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
    let className = 'Dropdown';
    if (!value) className += ' placeholder';
    if (expanded) className += ' expanded';
    if (required) className += ' required';
    if (disabled) className += ' disabled';
    if (slim) className += ' slim';
    if (error) className += ' error';
    return className;
  };

  const handleChange = (newValue: string) => {
    setExpanded(false);
    if (!disabled) {
      onChange(name, newValue);
      setHighlighted(newValue);
    }
  };

  const handleBlur = (newValue: string) => {
    setExpanded(false);
    onBlur(name, newValue);
  };

  const handleClick = () => {
    if (expanded && highlighted && highlighted !== value) {
      handleChange(highlighted);
    } else {
      setExpanded(prevExpanded => !prevExpanded);
    }
  };

  const handleKeyDown = (key: string) => {
    if (key === 'ArrowUp' || key === 'ArrowDown') {
      if (!expanded) {
        setExpanded(true);
      } else {
        // Update highlighted value
        const currentIndex = options.findIndex(option => option.value === highlighted);
        let nextIndex = currentIndex + (key === 'ArrowUp' ? -1 : 1);
        if (nextIndex >= options.length) nextIndex = 0;
        else if (nextIndex <= -1) nextIndex = options.length - 1;
        const newHighlighted = options[nextIndex].value;
        setHighlighted(newHighlighted);

        // Update options element scroll position
        if (listElement.current) {
          const highlightedElement: HTMLButtonElement | null = listElement.current.querySelector(
            `[value="${newHighlighted}"]`
          );
          if (highlightedElement) {
            const { offsetTop } = highlightedElement;
            const offsetBottom = offsetTop + highlightedElement.offsetHeight;
            const { scrollTop } = listElement.current;
            const scrollBottom = scrollTop + listElement.current.offsetHeight;
            const computed = window.getComputedStyle(listElement.current);
            const paddingTop = parseFloat(computed.getPropertyValue('padding-top'));
            const borderTop = parseFloat(computed.getPropertyValue('border-top'));
            const spacing = paddingTop + borderTop;
            let newScrollTop;
            if (offsetTop < scrollTop) {
              newScrollTop = offsetTop - spacing;
            } else if (offsetBottom > scrollBottom) {
              newScrollTop = scrollTop + (offsetBottom - scrollBottom) + spacing;
            }
            if (newScrollTop) {
              listElement.current.scrollTop = newScrollTop;
            }
          }
        }
      }
    } else if (key === 'Escape') {
      setExpanded(false);
    }
  };

  return (
    <DropdownView
      {...props}
      className={getClassName()}
      expanded={expanded}
      highlighted={highlighted}
      listElement={listElement}
      currentError={currentError}
      errorElement={errorElement}
      onChange={handleChange}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
});

export default DropdownContainer;
