import React from 'react';
import { ViewProps } from './Flexbox-types';
import { Flexbox } from './Flexbox-styles';

/** A layout wrapper component to arrange content side by side. */
export const FlexboxView: React.FC<ViewProps> = React.memo(({ children, headline }) => (
  <Flexbox className={`Flexbox${headline ? ' headline' : ''}`}>{children}</Flexbox>
));

export default FlexboxView;
