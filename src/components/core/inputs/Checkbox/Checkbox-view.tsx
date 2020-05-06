import React from 'react';
import { CheckSVG } from 'icons';
import { ViewProps } from './Checkbox-types';
import { Checkbox, Input, Checkmark, Label } from './Checkbox-styles';

const CheckboxView: React.FC<ViewProps> = ({
  className,
  name,
  label,
  selected,
  onChange,
  onBlur,
  required,
  disabled,
}) => (
  <Checkbox className={className}>
    <Input
      aria-labelledby={`${name}-label`}
      name={name}
      id={name}
      type="checkbox"
      checked={selected}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
    />
    <Checkmark>
      <CheckSVG />
    </Checkmark>
    <Label htmlFor={name} id={`${name}-label`} onMouseDown={e => e.preventDefault()}>
      {label}
    </Label>
  </Checkbox>
);

export default CheckboxView;
