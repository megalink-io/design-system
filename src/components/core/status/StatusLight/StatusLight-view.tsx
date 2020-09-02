import React from 'react';
import { Detail } from 'components/core/typography';
import { ViewProps } from './StatusLight-types';
import { StatusLight, Dot } from './StatusLight-styles';

/**
 * A status light that describes a state. It can be used to
 * convey semantic meaning, such as states and categories.
 */
export const StatusLightView: React.FC<ViewProps> = ({ color, label, disabled }) => (
  <StatusLight className={`StatusLight ${disabled ? ' disabled' : ''}`}>
    <Dot color={color} />
    {label && (
      <Detail color={color === 'white' || color === 'black' ? color : undefined}>
        {label}
      </Detail>
    )}
  </StatusLight>
);

export default StatusLightView;
