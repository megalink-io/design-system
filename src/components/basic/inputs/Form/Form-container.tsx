import React from 'react';
import { ContainerProps } from './Form-types';
import { Form } from './Form-styles';

/** A wrapper component that combines several input fields into one form. */
export const FormContainer: React.FC<ContainerProps> = ({ onSubmit, children }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Form className="Form" onSubmit={handleSubmit} noValidate>
      {children}
    </Form>
  );
};

export default FormContainer;
