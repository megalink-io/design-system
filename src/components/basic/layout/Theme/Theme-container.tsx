import React, { useEffect, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ColorScheme, DeviceType } from 'context';
import * as Types from 'types';
import { getDeviceColorScheme, getDeviceType } from 'helpers';
import { ContainerProps, Themes } from './Theme-types';
import { ResetCSS, FontFaces, DefaultCSS } from './Theme-styles';

const light: DefaultTheme = {
  colorScheme: 'light',
  colors: {
    white: {
      0: '#313131',
      50: '#3C3C3C',
      75: '#404040',
      100: '#464646',
      200: '#5A5A5A',
      300: '#6F6F6F',
      400: '#838383',
      500: '#989898',
      600: '#ADADAD',
      700: '#C2C2C2',
      800: '#D6D6D6',
      900: '#EBEBEB',
      1000: '#FFFFFF',
    },
    black: {
      0: '#FFFFFF',
      50: '#F4F4F4',
      75: '#EFEFEF',
      100: '#EAEAEA',
      200: '#D5D5D5',
      300: '#C0C0C0',
      400: '#ACACAC',
      500: '#979797',
      600: '#838383',
      700: '#6E6E6E',
      800: '#5A5A5A',
      900: '#454545',
      1000: '#313131',
    },
    gray: {
      0: '#FFFFFF',
      50: '#F4F4F4',
      75: '#EFEFEF',
      100: '#EAEAEA',
      200: '#D5D5D5',
      300: '#C0C0C0',
      400: '#ACACAC',
      500: '#979797',
      600: '#838383',
      700: '#6E6E6E',
      800: '#5A5A5A',
      900: '#454545',
      1000: '#313131',
    },
    yellow: {
      100: '#FFFEE5',
      400: '#FFF799',
      700: '#FFF14C',
      1000: '#FFEB00',
    },
    red: {
      100: '#FFEFF0',
      400: '#FFBFC3',
      700: '#FF8E96',
      1000: '#FF5F6A',
    },
    blue: {
      100: '#EBFAFF',
      400: '#B1EAFF',
      700: '#77DAFF',
      1000: '#3ECAFF',
    },
    green: {
      100: '#E8FFF0',
      400: '#A7FDC3',
      700: '#64FA96',
      1000: '#23F86A',
    },
  },
};

const dark: DefaultTheme = {
  colorScheme: 'dark',
  colors: {
    white: {
      0: '#313131',
      50: '#3C3C3C',
      75: '#404040',
      100: '#464646',
      200: '#5A5A5A',
      300: '#6F6F6F',
      400: '#838383',
      500: '#989898',
      600: '#ADADAD',
      700: '#C2C2C2',
      800: '#D6D6D6',
      900: '#EBEBEB',
      1000: '#FFFFFF',
    },
    black: {
      0: '#FFFFFF',
      50: '#F4F4F4',
      75: '#EFEFEF',
      100: '#EAEAEA',
      200: '#D5D5D5',
      300: '#C0C0C0',
      400: '#ACACAC',
      500: '#979797',
      600: '#838383',
      700: '#6E6E6E',
      800: '#5A5A5A',
      900: '#454545',
      1000: '#313131',
    },
    gray: {
      0: '#313131',
      50: '#3C3C3C',
      75: '#404040',
      100: '#464646',
      200: '#5A5A5A',
      300: '#6F6F6F',
      400: '#838383',
      500: '#989898',
      600: '#ADADAD',
      700: '#C2C2C2',
      800: '#D6D6D6',
      900: '#EBEBEB',
      1000: '#FFFFFF',
    },
    yellow: {
      100: '#46442C',
      400: '#837B1D',
      700: '#C2B40F',
      1000: '#FFEB00',
    },
    red: {
      100: '#463637',
      400: '#834347',
      700: '#C25159',
      1000: '#FF5F6A',
    },
    blue: {
      100: '#324146',
      400: '#366E83',
      700: '#3C9CC2',
      1000: '#3ECAFF',
    },
    green: {
      100: '#2F4637',
      400: '#2B8147',
      700: '#27BE59',
      1000: '#23F86A',
    },
  },
};

export const themes: Themes = { light, dark };

/** A wrapper component that is necessary for the visual representation. */
export const ThemeContainer: React.FC<ContainerProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<Types.ColorScheme>(getDeviceColorScheme());
  const [deviceType, setDeviceType] = useState<Types.DeviceType>(getDeviceType());

  // Update theme color meta tag when color scheme changes
  useEffect(() => {
    const metaTag = document.getElementById('meta-theme-color');
    metaTag?.setAttribute('content', themes[colorScheme].colors.gray[0]);
  }, [colorScheme]);

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
