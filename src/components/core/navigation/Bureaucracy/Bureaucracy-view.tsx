import React from 'react';
import { ViewProps } from './Bureaucracy-types';
import { Bureaucracy, Links } from './Bureaucracy-styles';

/**
 * A simple navigation bar for legally required
 * links at the bottom of the page.
 */
export const BureaucracyView: React.FC<ViewProps> = ({ centered, children }) => (
  <Bureaucracy className={`Bureaucracy${centered ? ' centered' : ''}`}>
    <Links>{children}</Links>
  </Bureaucracy>
);

export default BureaucracyView;
