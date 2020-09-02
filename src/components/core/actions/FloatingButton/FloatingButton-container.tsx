import React, { useState, useContext, useEffect } from 'react';
import { DeviceType } from 'context';
import { ContainerProps, ButtonProps } from './FloatingButton-types';
import FloatingButtonView from './FloatingButton-view';

/**
 * A floating button with an icon at the bottom right of the
 * screen used to navigate or perform individual actions.
 */
export const FloatingButtonContainer: React.FC<ContainerProps> = React.memo((props) => {
  const { loading } = props as ButtonProps;

  const [deviceType] = useContext(DeviceType);
  const [withTabBar, setWithTabBar] = useState<boolean>(false);

  // Update with tab bar state when device type changes
  useEffect(() => {
    const tabBarTag = document.querySelector('.TabBar');
    setWithTabBar(!!tabBarTag);
  }, [deviceType]);

  const getClassName = () => {
    let className = 'FloatingButton';
    if (loading) className += ' loading';
    if (withTabBar) className += ' with-tab-bar';
    return className;
  };

  return <FloatingButtonView {...props} className={getClassName()} />;
});

export default FloatingButtonContainer;
