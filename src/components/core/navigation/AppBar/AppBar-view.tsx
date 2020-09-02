import React from 'react';
import { ViewProps } from './AppBar-types';
import { AppBar } from './AppBar-styles';

/**
 * A top app bar that displays information and
 * actions related to the current page.
 */
export const ContainerView: React.FC<ViewProps> = React.memo(({ children }) => (
  <AppBar className="AppBar">{children}</AppBar>
));

export default ContainerView;
