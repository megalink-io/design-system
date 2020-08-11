import React from 'react';
import { ViewProps } from './DesignPreset-types';
import { DesignPreset, Element } from './DesignPreset-styles';

const DesignPresetView: React.FC<ViewProps> = ({ className, onClick, design, fontSvg }) => (
  <DesignPreset className={className} onClick={onClick} design={design}>
    <Element design={design}>{fontSvg}</Element>
  </DesignPreset>
);

export default DesignPresetView;
