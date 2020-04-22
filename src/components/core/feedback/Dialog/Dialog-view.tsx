import React from 'react';
import { ActionButton } from 'components/core/actions';
import { Subheading, Paragraph } from 'components/core/typography';
import { WarningSVG } from 'icons';
import { ViewProps } from './Dialog-types';
import { Dialog, Box, Header, WarningIcon, Buttons, Background } from './Dialog-styles';

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
        <Subheading>{heading}</Subheading>
        {variant === 'error' && (
          <WarningIcon>
            <WarningSVG />
          </WarningIcon>
        )}
      </Header>
      <Paragraph>{message}</Paragraph>
      <Buttons>
        {cancelButton && <ActionButton {...cancelButton} />}
        <ActionButton {...actionButton} />
      </Buttons>
    </Box>
    <Background />
  </Dialog>
);

export default DialogView;
