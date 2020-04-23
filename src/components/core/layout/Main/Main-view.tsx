import React from 'react';
import { ViewProps } from './Main-types';
import { Main } from './Main-styles';

/** A semantic wrapper component for the main content of the current page. */
export const MainView: React.FC<ViewProps> = React.memo(({ children }) => (
  <Main className="Main">{children}</Main>
));

export default MainView;
