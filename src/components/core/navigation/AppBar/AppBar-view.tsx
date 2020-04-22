import React from 'react';
import { Title } from 'components/core/typography';
import { ViewProps } from './AppBar-types';
import { AppBar, Content } from './AppBar-styles';

/**
 * A top app bar that displays information and
 * actions related to the current page.
 * */
export const ContainerView: React.FC<ViewProps> = React.memo(({ title, children }) => (
  <AppBar className="AppBar">
    <Content>
      <Title color="white">{title}</Title>
      {children}
    </Content>
  </AppBar>
));

export default ContainerView;
