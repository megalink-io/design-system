import React from 'react';
import { ViewProps } from './Response-types';
import { Response, Message } from './Response-styles';

const ResponseView: React.FC<ViewProps> = ({
  className,
  currentMessage,
  responseElement,
}) => (
  <Response className={className} ref={responseElement}>
    <Message>{currentMessage}</Message>
  </Response>
);

export default ResponseView;
