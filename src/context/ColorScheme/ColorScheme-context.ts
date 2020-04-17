import React from 'react';
import { ContextProps } from './ColorScheme-types';

/** Custom React context to set and retrieve the color scheme. */
const ColorScheme = React.createContext<ContextProps>(['light', () => {}]);

export default ColorScheme;
