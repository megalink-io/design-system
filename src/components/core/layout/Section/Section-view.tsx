import React from 'react';
import { ViewProps } from './Section-types';
import { Section } from './Section-styles';

/** A semantic wrapper component to divide the content of a page into sections. */
export const SectionView: React.FC<ViewProps> = React.memo(({ children }) => (
  <Section className="Section">{children}</Section>
));

export default SectionView;
