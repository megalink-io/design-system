import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { ColorScheme, DeviceType } from 'context';
import * as Types from 'types';
import { getDeviceColorScheme, getDeviceType } from 'helpers';
import { ContainerProps } from './Theme-types';
import { ResetCSS, FontFaces, DefaultCSS } from './Theme-styles';
import { themes } from './Theme-data';

smoothscroll.polyfill();

/** A wrapper component that is necessary for the visual representation. */
export const ThemeContainer: React.FC<ContainerProps> = ({ children }) => {
  const location = useLocation();
  const [colorScheme, setColorScheme] = useState<Types.ColorScheme>(getDeviceColorScheme());
  const [deviceType, setDeviceType] = useState<Types.DeviceType>(getDeviceType());

  // Update body background and meta theme color when children,
  // location, color scheme or deviceType changes
  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    const mainAppPageTag = document.querySelector('.Page.main-app');
    const mainAppAppBarTag = document.querySelector('.Page.main-app .AppBar');
    let colorCode = themes[colorScheme].colors.gray[0];
    if (mainAppPageTag && (deviceType !== 'mobile' || mainAppAppBarTag)) {
      colorCode = themes[colorScheme].colors.black['1000'];
    }
    document.body.style.backgroundColor = colorCode;
    themeColorMetaTag?.setAttribute('content', colorCode);
  }, [children, location, colorScheme, deviceType]);

  // Update device type when window size changes
  useEffect(() => {
    const handleResizeEvent = () => {
      setDeviceType(getDeviceType());
    };
    window.addEventListener('resize', handleResizeEvent);
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, []);

  // Add or remove tabbing CSS class
  useEffect(() => {
    let handleMouseDownOnce: () => void;
    const handleFirstTab = (e: KeyboardEvent): void => {
      if (e.keyCode === 9) {
        document.body.classList.add('tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
      }
    };
    handleMouseDownOnce = () => {
      document.body.classList.remove('tabbing');
      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleFirstTab);
    };
    window.addEventListener('keydown', handleFirstTab);
  }, []);

  return (
    <ColorScheme.Provider value={[colorScheme, setColorScheme]}>
      <DeviceType.Provider value={[deviceType, setDeviceType]}>
        <ThemeProvider theme={themes[colorScheme]}>
          <ResetCSS />
          <FontFaces />
          <DefaultCSS />
          {children}
        </ThemeProvider>
      </DeviceType.Provider>
    </ColorScheme.Provider>
  );
};

export default ThemeContainer;
