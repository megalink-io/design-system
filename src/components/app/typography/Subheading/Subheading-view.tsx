import React from 'react';
import { ViewProps } from './Subheading-types';
import { Subheading } from './Subheading-styles';

/**
 * A subheading divides the content of a section
 * and can appear as often as you like.
 */
export const SubheadingView: React.FC<ViewProps> = React.memo(({ color, children }) => (
  <Subheading className="Subheading" color={color}>
    {children}
  </Subheading>
));

export default SubheadingView;
