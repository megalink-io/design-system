import React from 'react';
import { InputLabel, InputError } from 'components/core/inputs';
import { ArrowDownSVG, CheckSVG } from 'icons';
import { ViewProps } from './Dropdown-types';
import { Dropdown, Field, Button, ButtonLabel, List, Item, ItemLabel } from './Dropdown-styles';

const DropdownView: React.FC<ViewProps> = ({
  className,
  name,
  label,
  placeholder,
  value,
  options,
  error,
  expanded,
  highlighted,
  listElement,
  onChange,
  onBlur,
  onClick,
  onKeyDown,
  required,
  disabled,
}) => (
  <Dropdown className={className}>
    {label && <InputLabel label={label} htmlFor={name} required={required} disabled={disabled} />}
    <Field>
      <Button
        aria-label={!label && placeholder ? placeholder : undefined}
        aria-labelledby={label ? `${name}-label` : undefined}
        aria-required={required}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        type="button"
        name={name}
        id={name}
        value={value}
        onClick={onClick}
        onKeyDown={e => onKeyDown(e.key)}
        onBlur={() => onBlur(value)}
        disabled={disabled}
      >
        <ButtonLabel>
          {options.find(option => option.value === value)?.label || placeholder}
        </ButtonLabel>
        <ArrowDownSVG />
      </Button>
      <List aria-labelledby={label ? `${name}-label` : undefined} ref={listElement} role="listbox">
        {options.map(option => (
          <Item
            key={option.value}
            role="option"
            value={option.value}
            highlighted={option.value === highlighted}
            onClick={() => onChange(option.value)}
            onMouseDown={e => e.preventDefault()}
          >
            <ItemLabel>{option.label}</ItemLabel>
            {option.value === value && <CheckSVG />}
          </Item>
        ))}
      </List>
    </Field>
    <InputError error={error} />
  </Dropdown>
);

export default DropdownView;
