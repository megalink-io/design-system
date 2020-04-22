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
  required,
  disabled,
}) => (
  <Checkbox className={className} htmlFor={name} id={`${name}-label`}>
    <Input
      aria-labelledby={`${name}-label`}
      name={name}
      id={name}
      type="checkbox"
      checked={selected}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
    <Checkmark>
      <CheckSVG />
    </Checkmark>
    <Label>{label}</Label>
  </Checkbox>
);

export default CheckboxView;
