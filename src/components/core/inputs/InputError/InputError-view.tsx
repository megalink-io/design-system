import React from 'react';
import { ViewProps } from './InputError-types';
import { InputError, Message } from './InputError-styles';

const InputErrorView: React.FC<ViewProps> = ({ error, errorElement }) => (
  <InputError className="InputError" ref={errorElement}>
    <Message>{error}</Message>
  </InputError>
);

export default InputErrorView;
