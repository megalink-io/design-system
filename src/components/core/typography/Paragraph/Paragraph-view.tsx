import React from 'react';
import { ViewProps } from './Paragraph-types';
import { Paragraph } from './Paragraph-styles';

/** A paragraph represents a block of text and can appear as often as you like. */
export const ParagraphView: React.FC<ViewProps> = React.memo(({ color, children }) => (
  <Paragraph className="Paragraph" color={color}>
    {children}
  </Paragraph>
));

export default ParagraphView;
