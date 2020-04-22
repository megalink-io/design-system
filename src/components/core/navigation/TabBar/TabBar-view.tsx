import React from 'react';
import { ViewProps } from './TabBar-types';
import { TabBar } from './TabBar-styles';

/**
 * A tab bar at the bottom of the screen that allows users to navigate
 * the content of the app using a single-level icon navigation.
 */
export const TabBarView: React.FC<ViewProps> = React.memo(({ children }) => (
  <TabBar className="TabBar">{children}</TabBar>
));

export default TabBarView;
