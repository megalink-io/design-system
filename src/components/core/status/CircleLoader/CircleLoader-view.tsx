import React from 'react';
import { ViewProps } from './CircleLoader-types';
import { CircleLoader, Centered } from './CircleLoader-styles';

/**
 * A loading spinner that visually displays the progress
 * of a system operation such as uploading or processing.
 * */
export const CircleLoaderView: React.FC<ViewProps> = ({ color, size, centered }) => {
  if (centered) {
    return (
      <Centered className="CircleLoader">
        <CircleLoader color={color} size={size} />
      </Centered>
    );
  }

  return <CircleLoader className="CircleLoader" color={color} size={size} />;
};

export default CircleLoaderView;
