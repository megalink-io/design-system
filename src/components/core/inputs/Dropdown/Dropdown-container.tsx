import React, { useRef, useState } from 'react';
import { ContainerProps } from './Dropdown-types';
import DropdownView from './Dropdown-view';

/**
 * A drop-down field that allows users to select predefined values. Various decorations
 * can be displayed in or around the field to communicate the entry requirements.
 */
export const DropdownContainer: React.FC<ContainerProps> = React.memo((props) => {
  const {
    name,
    options,
    value,
    error,
    onChange,
    onBlur,
    required,
    disabled,
    slim,
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  const [highlighted, setHighlighted] = useState<string>(value);
  const listElement = useRef<HTMLUListElement>(null);

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
      setExpanded((prevExpanded) => !prevExpanded);
    }
  };

  const handleKeyDown = (key: string) => {
    if (key === 'ArrowUp' || key === 'ArrowDown') {
      if (!expanded) {
        setExpanded(true);
      } else {
        // Update highlighted value
        const currentIndex = options.findIndex((option) => option.value === highlighted);
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
      onChange={handleChange}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
});

export default DropdownContainer;
