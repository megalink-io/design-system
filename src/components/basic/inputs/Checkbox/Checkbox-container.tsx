import React from 'react';
import { ContainerProps } from './Checkbox-types';
import CheckboxView from './Checkbox-view';

/**
 * A check box that allows users to select an option. The label
 * next to the checkbox describes the selection option.
 * */
export const CheckboxContainer: React.FC<ContainerProps> = React.memo(
  ({ name, selected, error, onChange, disabled, ...props }) => {
    const getClassName = () => {
      let className = 'Checkbox';
      if (selected) className += ' selected';
      if (error) className += ' error';
      if (disabled) className += ' disabled';
      return className;
    };

    const handleChange = () => {
      onChange(name, !selected);
    };

    return (
      <CheckboxView
        {...props}
        className={getClassName()}
        name={name}
        selected={selected}
        error={error}
        onChange={handleChange}
        disabled={disabled}
      />
    );
  }
);

export default CheckboxContainer;
