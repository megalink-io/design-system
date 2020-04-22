import React from 'react';
import { ViewProps } from './NavBar-types';
import { NavBar } from './navBar-styles';

/**
 * A navigation bar that displays information
 * and actions related to the current page.
 * */
export const NavBarView: React.FC<ViewProps> = React.memo(({ children }) => (
  <NavBar className="NavBar">{children}</NavBar>
));

export default NavBarView;
