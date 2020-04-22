import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';
import { ActionButton } from '../../actions';
import Dialog from '.';

type StoryId = 'confirmation' | 'information' | 'destructive' | 'error';

export const DialogPreview: React.FC<{ storyId: StoryId }> = ({ storyId }) => {
  const [open, setOpen] = useState(false);

  const getButtonColor = () => {
    if (storyId === 'confirmation') {
      return 'blue';
    }
    if (storyId === 'information') {
      return 'gray';
    }
    return 'red';
  };

  const getButtonLabel = () => {
    if (storyId === 'confirmation') {
      return 'Enable';
    }
    if (storyId === 'information') {
      return 'Continue';
    }
    if (storyId === 'destructive') {
      return 'Delete';
    }
    return 'OK';
  };

  return (
    <>
      <ActionButton
        label={`${storyId.charAt(0).toUpperCase()}${storyId.slice(1)}`}
        variant="tertiary"
        color={getButtonColor()}
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Dialog
        open={open}
        variant={storyId}
        heading={text('Heading', 'This is the heading', storyId)}
        message={text(
          'Message',
          `This is just a great example text for the ${storyId} dialog message.`,
          storyId
        )}
        actionButton={{
          label: getButtonLabel(),
          type: 'button',
          onClick: () => {
            setOpen(false);
          },
        }}
        cancelButton={
          storyId !== 'error'
            ? {
                label: 'Cancel',
                type: 'button',
                onClick: () => {
                  setOpen(false);
                },
              }
            : undefined
        }
      />
    </>
  );
};

export default {
  title: 'Components/core/feedback/Dialog',
  includeStories: [],
};
