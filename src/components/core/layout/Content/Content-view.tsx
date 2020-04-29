import React from 'react';
import { ViewProps } from './Content-types';
import { Content } from './Content-styles';

/** A semantic wrapper component without special meaning for grouping content. */
export const ContentView: React.FC<ViewProps> = React.memo(({ children }) => (
  <Content className="Content">{children}</Content>
));

export default ContentView;
