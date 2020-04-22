import React from 'react';
import { ViewProps } from './Detail-types';
import { Detail } from './Detail-styles';

/**
 * A detail is a side note or small description
 * and can appear as often as you like.
 */
export const DetailView: React.FC<ViewProps> = React.memo(({ color, children }) => (
  <Detail className="Detail" color={color}>
    {children}
  </Detail>
));

export default DetailView;
