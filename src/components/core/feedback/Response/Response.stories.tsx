import React, { useState, useEffect } from 'react';
import { ActionButton } from '../../actions';
import Response from '.';

type StoryId = 'information' | 'success' | 'error';

export const ResponsePreview: React.FC<{ storyId: StoryId }> = ({ storyId }) => {
  const [response, setResponse] = useState<any>({ status: '', message: '' });

  useEffect(() => {
    if (response.message) {
      const timeout = setTimeout(() => {
        setResponse({ status: '', message: '' });
      }, 8000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [response]);

  const getButtonColor = () => {
    if (storyId === 'information') {
      return 'gray';
    }
    if (storyId === 'success') {
      return 'green';
    }
    return 'red';
  };

  return (
    <>
      <ActionButton
        label={`${storyId.charAt(0).toUpperCase()}${storyId.slice(1)}`}
        variant="tertiary"
        color={getButtonColor()}
        type="button"
        onClick={() => {
          setResponse({
            status: storyId,
            message: 'This is a short sample answer.',
          });
        }}
      />
      <Response {...response} />
    </>
  );
};

export default {
  title: 'Components/core/feedback/Response',
  includeStories: [],
};
