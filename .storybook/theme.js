import { create } from '@storybook/theming';
import { themes } from '../src/components/core/layout/Theme/Theme-data';
import { getDeviceColorScheme } from '../src/helpers';

const colorScheme = getDeviceColorScheme();

// Create custom Storybook theme
export default create({
  // Base colors
  base: colorScheme,
  colorPrimary: themes[colorScheme].colors.blue[1000],
  colorSecondary: themes[colorScheme].colors.blue[1000],

  // UI
  appBg: colorScheme === 'dark' ? '#2a2a2a' : '#F6F9FC',
  appContentBg: themes[colorScheme].colors.gray[0],
  appBorderColor: themes[colorScheme].colors.gray[100],
  appBorderRadius: 6,

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: themes[colorScheme].colors.gray[900],
  textInverseColor: themes[colorScheme].colors.gray[0],

  // Toolbar default and active colors
  barTextColor: themes[colorScheme].colors.gray[500],
  barSelectedColor: themes[colorScheme].colors.blue[1000],
  barBg: themes[colorScheme].colors.gray[0],

  // Form colors
  inputBg: themes[colorScheme].colors.gray[0],
  inputBorder: themes[colorScheme].colors.gray[75],
  inputTextColor: themes[colorScheme].colors.gray[700],
  inputBorderRadius: 6,

  // Custom branding
  brandTitle: 'Megalink',
  brandUrl: 'https://www.megalink.io/',
  brandImage: `/megalink-logo-${colorScheme === 'dark' ? 'light' : 'dark'}.svg`,
});
