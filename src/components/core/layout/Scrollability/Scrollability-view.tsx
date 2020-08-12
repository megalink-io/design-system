import React from 'react';
import { ViewProps, HorizontalProps, VerticalProps } from './Scrollability-types';
import { Scrollability, ScrollBox, ScrollContent } from './Scrollability-styles';

/**
 * A wrapper component that allows horizontal
 * or vertical scrolling if required.
 * */
export const ScrollabilityView: React.FC<ViewProps> = ({ children, ...props }) => {
  const { horizontal } = props as HorizontalProps;
  const { vertical, maxHeight } = props as VerticalProps;

  // For horizontal scrolling
  if (horizontal) {
    return (
      <Scrollability className="Scrollability horizontal">
        <ScrollBox>
          <ScrollContent>{children}</ScrollContent>
        </ScrollBox>
      </Scrollability>
    );
  }

  // For vertical scrolling
  if (vertical) {
    return (
      <Scrollability className="Scrollability vertical" maxHeight={maxHeight}>
        <ScrollBox>
          <ScrollContent>{children}</ScrollContent>
        </ScrollBox>
      </Scrollability>
    );
  }

  return null;
};

export default ScrollabilityView;
