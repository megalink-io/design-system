import React from 'react';
import { ViewProps } from './Tabs-types';
import { Tabs, Scrollbar, Link, Indicator } from './Tabs-styles';

const TabsView: React.FC<ViewProps> = ({ tabs, scrollbarElementRef }) => (
  <Tabs className="Tabs" role="tablist">
    <Scrollbar ref={scrollbarElementRef}>
      {tabs.map(({ label, to, replace, exact }) => (
        <Link key={label} role="tab" to={to} replace={replace} exact={exact}>
          {label}
        </Link>
      ))}
      <Indicator />
    </Scrollbar>
  </Tabs>
);

export default TabsView;
