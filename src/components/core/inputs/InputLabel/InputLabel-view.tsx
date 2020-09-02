import React from 'react';
import { ViewProps, LabelProps } from './InputLabel-types';
import { Label, Span, Required } from './InputLabel-styles';

/** A text element that communicates the input requirements for form fields. */
export const InputLabelView: React.FC<ViewProps> = React.memo(
  ({ as, label, required, disabled, ...props }) => {
    const { htmlFor } = props as LabelProps;
    const className = `InputLabel${disabled ? ' disabled' : ''}`;

    if (as === 'span') {
      return (
        <Span className={className}>
          {label}
          {required && <Required>*</Required>}
        </Span>
      );
    }

    return (
      <Label
        className={className}
        id={htmlFor ? `${htmlFor}-label` : undefined}
        htmlFor={htmlFor || undefined}
        onMouseDown={(e) => e.preventDefault()}
      >
        {label}
        {required && <Required>*</Required>}
      </Label>
    );
  }
);

export default InputLabelView;
