import React from 'react';
import { Logo } from 'components/core/graphics';
import { ViewProps } from './SideBar-types';
import { SideBar, Content, Menu, LogoLink } from './SideBar-styles';

/**
 * A sidebar that allows users to navigate the content
 * of the app using a single-level icon navigation.
 */
export const SideBarView: React.FC<ViewProps> = React.memo(({ topMenu, bottomMenu }) => (
  <SideBar className="SideBar" aria-label="Side navigation">
    <Content>
      <Menu aria-label="Icon menu above">
        <LogoLink to="/" aria-label="Home">
          <Logo variant="icon" size="medium" />
        </LogoLink>
        {topMenu}
      </Menu>
      {bottomMenu && <Menu aria-label="Icon menu below">{bottomMenu}</Menu>}
    </Content>
  </SideBar>
));

export default SideBarView;
