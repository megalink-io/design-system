import React from 'react';
import { ContextProps } from './DeviceType-types';

/** Custom React context to set and retrieve the device type. */
const DeviceType = React.createContext<ContextProps>(['mobile', () => {}]);

export default DeviceType;
