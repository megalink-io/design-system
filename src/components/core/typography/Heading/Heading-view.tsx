import React from 'react';
import { ViewProps } from './Heading-types';
import { Heading } from './Heading-styles';

/**
 * A heading is the main heading of a section and
 * should therefore appear only once per section.
 */
export const HeadingView: React.FC<ViewProps> = React.memo(({ color, children }) => (
  <Heading className="Heading" color={color}>
    {children}
  </Heading>
));

export default HeadingView;
