import React from 'react';
import { ActionButton } from 'components/basic/actions';
import { WarningSVG } from 'icons';
import { ViewProps } from './Dialog-types';
import {
  Dialog,
  Box,
  Header,
  Heading,
  WarningIcon,
  Message,
  Buttons,
  Background,
} from './Dialog-styles';

const DialogView: React.FC<ViewProps> = ({
  className,
  variant,
  heading,
  message,
  actionButton,
  cancelButton,
}) => (
  <Dialog className={className}>
    <Box>
      <Header>
        <Heading>{heading}</Heading>
        {variant === 'error' && (
          <WarningIcon>
            <WarningSVG />
          </WarningIcon>
        )}
      </Header>
      <Message>{message}</Message>
      <Buttons>
        {cancelButton && <ActionButton {...cancelButton} />}
        <ActionButton {...actionButton} />
      </Buttons>
    </Box>
    <Background />
  </Dialog>
);

export default DialogView;
