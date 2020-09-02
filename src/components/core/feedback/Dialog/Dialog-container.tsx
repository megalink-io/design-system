import React, { useState, useEffect } from 'react';
import {
  ContainerProps,
  ActionButtonProps,
  ActionButtonColor,
  ActionButtonVariant,
  CancelButtonProps,
} from './Dialog-types';
import DialogView from './Dialog-view';

/**
 * A dialog box that displays important information that users need to
 * acknowledge. They appear above the interface and block other interactions.
 */
export const DialogContainer: React.FC<ContainerProps> = React.memo(
  ({ open, variant, actionButton, cancelButton, ...props }) => {
    const [prevOpen, setPrevOpen] = useState<boolean>(open);
    const [actionButtonLoading, setActionButtonLoading] = useState<boolean>(false);
    const [cancelButtonLoading, setCancelButtonLoading] = useState<boolean>(false);

    // Update prev open state when open props changes
    useEffect(() => {
      if (open) {
        setPrevOpen(true);
        return () => null;
      }
      if (!open && prevOpen) {
        const timeout = setTimeout(() => {
          setPrevOpen(false);
        }, 400);
        return () => {
          clearTimeout(timeout);
        };
      }
      return () => null;
    }, [open, prevOpen]);

    const getClassName = () => {
      let className = `Dialog ${variant}`;
      if (open) className += ' open';
      else if (!open && prevOpen) className += ' close';
      return className;
    };

    const getActionButton = (): ActionButtonProps => {
      const getVariant = (): ActionButtonVariant => {
        if (variant === 'confirmation') {
          return 'primary';
        }
        return 'secondary';
      };

      const getColor = (): ActionButtonColor => {
        if (variant === 'confirmation') {
          return 'blue';
        }
        if (variant === 'destructive') {
          return 'red';
        }
        return 'gray';
      };

      if (actionButton.type === 'button') {
        const handleClick = () => {
          setActionButtonLoading(true);
          Promise.resolve(actionButton.onClick()).then(() => {
            setActionButtonLoading(false);
          });
        };

        return {
          ...actionButton,
          variant: getVariant(),
          color: getColor(),
          onClick: handleClick,
          loading: actionButtonLoading,
        };
      }

      return {
        ...actionButton,
        variant: getVariant(),
        color: getColor(),
      };
    };

    const getCancelButton = (): CancelButtonProps => {
      if (cancelButton) {
        if (cancelButton.type === 'button') {
          const handleClick = () => {
            setCancelButtonLoading(true);
            Promise.resolve(cancelButton.onClick()).then(() => {
              setCancelButtonLoading(false);
            });
          };

          return {
            ...cancelButton,
            variant: 'tertiary',
            onClick: handleClick,
            loading: cancelButtonLoading,
          };
        }

        return {
          ...cancelButton,
          variant: 'tertiary',
        };
      }

      return undefined;
    };

    if (open || prevOpen) {
      return (
        <DialogView
          {...props}
          className={getClassName()}
          open={open}
          variant={variant}
          actionButton={getActionButton()}
          cancelButton={getCancelButton()}
        />
      );
    }

    return null;
  }
);

export default DialogContainer;
