import React from 'react';
import { ArrowDownSVG, CheckSVG } from 'icons';
import { ViewProps } from './Dropdown-types';
import {
  Dropdown,
  Label,
  Required,
  Field,
  Button,
  ButtonLabel,
  List,
  Item,
  ItemLabel,
  Error,
  ErrorMessage,
} from './Dropdown-styles';

const DropdownView: React.FC<ViewProps> = ({
  className,
  expanded,
  onClick,
  highlighted,
  onKeyDown,
  listElement,
  name,
  label,
  placeholder,
  value,
  options,
  currentError,
  errorElement,
  onChange,
  onBlur,
  required,
  disabled,
}) => (
  <Dropdown className={className}>
    {label && (
      <Label id={`${name}-label`} htmlFor={name} onMouseDown={e => e.preventDefault()}>
        {label}
        {required && <Required> *</Required>}
      </Label>
    )}
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
    {currentError && (
      <Error ref={errorElement}>
        <ErrorMessage>{currentError}</ErrorMessage>
      </Error>
    )}
  </Dropdown>
);

export default DropdownView;
