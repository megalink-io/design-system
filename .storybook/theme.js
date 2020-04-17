import { create } from '@storybook/theming';
import { themes } from '../src/components/basic/layout/Theme/Theme-container';
import { getDeviceColorScheme } from '../src/helpers';

const colorScheme = getDeviceColorScheme();

export default create({
  base: colorScheme,
  colorPrimary: themes[colorScheme].colors.blue[1000],
  colorSecondary: themes[colorScheme].colors.blue[1000],
  appBg: colorScheme === 'dark' ? '#2a2a2a' : '#F6F9FC',
  appContentBg: themes[colorScheme].colors.gray[0],
  appBorderColor: themes[colorScheme].colors.gray[100],
  appBorderRadius: 6,
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',
  textColor: themes[colorScheme].colors.gray[900],
  textInverseColor: themes[colorScheme].colors.gray[0],
  barTextColor: themes[colorScheme].colors.gray[500],
  barSelectedColor: themes[colorScheme].colors.blue[1000],
  barBg: themes[colorScheme].colors.gray[0],
  inputBg: themes[colorScheme].colors.gray[0],
  inputBorder: themes[colorScheme].colors.gray[75],
  inputTextColor: themes[colorScheme].colors.gray[700],
  inputBorderRadius: 6,
  brandTitle: 'Megalink',
  brandUrl: 'https://www.megalink.io/',
  brandImage: `/megalink-logo-${colorScheme === 'dark' ? 'light' : 'dark'}.svg`,
});
