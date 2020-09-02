import React from 'react';
import { ViewProps } from './Title-types';
import { Title } from './Title-styles';

/**
 * A title represents the main heading of a page and
 * should therefore appear only once per page.
 */
export const TitleView: React.FC<ViewProps> = React.memo(({ color, children }) => (
  <Title className="Title" color={color}>
    {children}
  </Title>
));

export default TitleView;
