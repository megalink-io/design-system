import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
      0: '#FFFFFF',
      100: '#FFFEE5',
      200: '#FFFBCC',
      300: '#FFF9B2',
      400: '#FFF799',
      500: '#FFF57F',
      600: '#FFF366',
      700: '#FFF14C',
      800: '#FFEF33',
      900: '#FFED19',
      1000: '#FFEB00',
    },
    red: {
      0: '#FFFFFF',
      100: '#FFEFF0',
      200: '#FFDFE1',
      300: '#FFCED2',
      400: '#FFBFC3',
      500: '#FFAEB4',
      600: '#FF9FA5',
      700: '#FF8E96',
      800: '#FF7F87',
      900: '#FF6E78',
      1000: '#FF5F6A',
    },
    blue: {
      0: '#FFFFFF',
      100: '#EBFAFF',
      200: '#D8F5FF',
      300: '#C4EFFF',
      400: '#B1EAFF',
      500: '#9EE4FF',
      600: '#8BDFFF',
      700: '#77DAFF',
      800: '#64D4FF',
      900: '#50CFFF',
      1000: '#3ECAFF',
    },
    green: {
      0: '#FFFFFF',
      100: '#E8FFF0',
      200: '#D3FEE1',
      300: '#BCFDD2',
      400: '#A7FDC3',
      500: '#90FBB4',
      600: '#7BFBA5',
      700: '#64FA96',
      800: '#4FF987',
      900: '#38F878',
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
      0: '#313131',
      100: '#46442C',
      200: '#5A5627',
      300: '#6F6922',
      400: '#837B1D',
      500: '#988E18',
      600: '#ADA114',
      700: '#C2B40F',
      800: '#D6C60A',
      900: '#EBD905',
      1000: '#FFEB00',
    },
    red: {
      0: '#313131',
      100: '#463637',
      200: '#5A3A3C',
      300: '#6F3E42',
      400: '#834347',
      500: '#98474D',
      600: '#AD4D53',
      700: '#C25159',
      800: '#D6565E',
      900: '#EB5A64',
      1000: '#FF5F6A',
    },
    blue: {
      0: '#313131',
      100: '#324146',
      200: '#33505A',
      300: '#345F6F',
      400: '#366E83',
      500: '#377D98',
      600: '#398DAD',
      700: '#3C9CC2',
      800: '#3BABD6',
      900: '#3CBBEB',
      1000: '#3ECAFF',
    },
    green: {
      0: '#313131',
      100: '#2F4637',
      200: '#2E593C',
      300: '#2C6D42',
      400: '#2B8147',
      500: '#29944D',
      600: '#29A953',
      700: '#27BE59',
      800: '#26D05E',
      900: '#24E464',
      1000: '#23F86A',
    },
  },
};

export const themes: Themes = { light, dark };

/** A wrapper component that is necessary for the visual representation. */
export const ThemeContainer: React.FC<ContainerProps> = ({ children }) => {
  const location = useLocation();
  const [colorScheme, setColorScheme] = useState<Types.ColorScheme>(getDeviceColorScheme());
  const [deviceType, setDeviceType] = useState<Types.DeviceType>(getDeviceType());

  // Update body background and meta theme color when
  // location, color scheme or deviceType changes
  useLayoutEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    const mainAppPageTag = document.querySelector('.Page.main-app');
    const mainAppAppBarTag = document.querySelector('.Page.main-app .AppBar');
    let colorCode = themes[colorScheme].colors.gray[0];
    if (mainAppPageTag && (deviceType !== 'mobile' || mainAppAppBarTag)) {
      colorCode = themes[colorScheme].colors.black['1000'];
    }
    document.body.style.backgroundColor = colorCode;
    themeColorMetaTag?.setAttribute('content', colorCode);
  }, [location, colorScheme, deviceType]);

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
