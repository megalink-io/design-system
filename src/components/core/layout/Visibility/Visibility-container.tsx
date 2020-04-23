import React, { useContext } from 'react';
import { DeviceType } from 'context';
import { ContainerProps } from './Visibility-types';

/** A wrapper component that displays content only at specified device types. */
export const VisibilityContainer: React.FC<ContainerProps> = React.memo(
  ({ desktop, tablet, mobile, children }) => {
    const [deviceType] = useContext(DeviceType);

    // Display children if props and device type match
    if (
      (desktop && deviceType === 'desktop') ||
      (tablet && deviceType === 'tablet') ||
      (mobile && deviceType === 'mobile')
    ) {
      return <>{children}</>;
    }

    return null;
  }
);

export default VisibilityContainer;
