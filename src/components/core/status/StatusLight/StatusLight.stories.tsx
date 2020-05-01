import React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import StatusLight from '.';

type StoryId = 'disabled' | 'positive' | 'negative' | 'with_label';

export const statusLightPreview: React.FC<{ storyId: StoryId }> = ({ storyId }) => {
  const getColor = () => {
    if (storyId === 'with_label') {
      return 'blue';
    }
    if (storyId === 'negative') {
      return 'red';
    }
    return 'green';
  };

  const getLabel = () => {
    if (storyId === 'with_label') {
      return 'Active';
    }
    return '';
  };

  const getDisabled = () => {
    if (storyId === 'disabled') {
      return true;
    }
    return false;
  };

  return (
    <StatusLight
      color={select(
        'Color',
        ['white', 'black', 'gray', 'yellow', 'red', 'blue', 'green'],
        getColor(),
        storyId
      )}
      label={text('Label', getLabel(), storyId)}
      disabled={boolean('Disabled', getDisabled(), storyId)}
    />
  );
};

export default {
  title: 'Components/core/status/StatusLight',
  includeStories: [],
};
